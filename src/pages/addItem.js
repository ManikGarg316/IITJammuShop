import Transitions from '../Transition'
import React, {useState, useEffect} from 'react';
import './addItem.css';
import {sha256} from 'js-sha256';
// import MultiImageInput from 'react-multiple-image-input';
import {projectStorage, projectFirestore} from '../firebase/config';
const MyForm = () => {

	const [images, setImages] = useState([]);
	const [urls, setUrls] = useState([]);
	const [progress, setProgress] = useState(0);
	const [form, setForm] = useState({});


	useEffect(() => {
		let temp_form = form;
		temp_form["image_urls"] = urls;
		setForm(temp_form);
		if(images.length > 0 && images.length === urls.length){
			form["hash"] = sha256(JSON.stringify(form));
			alert("Here is the key to delete this product\n ")
			projectFirestore.collection("Products").add(form);
		}
	}, [urls, form]);

	const handleForm = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleImageChange =(e)=>{
		if(e.target.files.length > 3){
			alert("You can only upload upto 3 images for your product!");
		}
		else if(e.target.files.length < 4 && e.target.files.length > 0){
		
			for (let i = 0; i < e.target.files.length; i++) {
				const newImage = e.target.files[i];
				setImages((prevState) => [...prevState, newImage]);
			}
		}
	}

	const handleSubmit=(e)=>{
		if(images.length === 0){
			alert("You have to upload atleast 1 image for your product!");
		}
		else if(images.length > 0)
		{
			var today = new Date();
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			var dateTime = date+' '+time;
			let temp_form = form;
			temp_form["time_of_submission"] = dateTime;
			setForm(temp_form);
			const promises = [];
			images.map((image) => {
			const uploadTask = projectStorage.ref(image.name).put(image);
			promises.push(uploadTask);
			uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round(
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(progress);
			},
			(error) => {
				console.log(error);
			},
			async () => {
				await projectStorage
				.ref()
				.child(image.name)
				.getDownloadURL()
				.then((urls) => {
					setUrls((prevState) => [...prevState, urls]);
					});
				});
			});

			Promise.all(promises)
				.then(() => {alert("All images uploaded!");})
				.catch((err) => console.log(err));
		}
		e.preventDefault();
	};
	console.log(form);
	return (
		<Transitions>
		<div className="Myform">
		<header className="Myform-header">
		<form onSubmit={(e) => {handleSubmit(e)}}>
		<h2> IIT Jammu Shop </h2>
		<h3> Item Addition Form </h3>
		<h4> Fill out the details for your product.</h4>
			<label >
			Product Name:
			</label><br/>
			<input type="text" required name="product_name" onChange={(e) => {handleForm(e)}} /><br/>
			<br/>
			<label >
			Price(in rupees):
			</label><br/>
			<input type="number" required name="product_price" onChange={(e) => {handleForm(e)}} /><br/>
			<br/>
			<label>
			Description:
			</label><br/>
			<input type="text" required name="desc" onChange={(e) => {handleForm(e)}} /><br/>
			<br/>
			<label>
			Contact No.:
			</label><br/>
			<input type="tel" required name="contact_number" maxLength="10" onChange={(e) => {handleForm(e)}} /><br/>
			<br/>
			<input type="file" multiple required onChange={(e) => {handleImageChange(e)}} accept="image/*"/><br />
			<input type="submit" value="SUBMIT"/>
		</form>
		</header>
		</div>
		</Transitions>
	);
}

export default MyForm;