import Transitions from '../Transition'
import React, {useState} from 'react';
import './addItem.css';
import MultiImageInput from 'react-multiple-image-input';
function MyForm() {

	const [name , setName] = useState('');
	const [price , setPrice] = useState('');
	const [email , setEmail] = useState('');
	const [desc , setDesc] = useState('');
	const [images, setImages] = useState({});
	// function to update state of name with
	// value enter by user in form
	const handleNameChange =(e)=>{
	setName(e.target.value);
	}
	// function to update state of age with value
	// enter by user in form
	const handlePriceChange =(e)=>{
	setPrice(e.target.value);
	}
	// function to update state of email with value
	// enter by user in form
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}
	// function to update state of password with
	// value enter by user in form
	const handleDescChange =(e)=>{
	setDesc(e.target.value);
	}
	// function to update state of confirm password
	// with value enter by user in form
	// below function will be called when user
	// click on submit button .
	const handleSubmit=(e)=>{
		alert("Email Sent. Check your email and input the code.");
	e.preventDefault();
	}
return (
	<Transitions>
	<div className="Myform">
	<header className="Myform-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{/*when user submit the form , handleSubmit()
		function will be called .*/}
	<h2> IIT Jammu Shop </h2>
	<h3> Item Addition Form </h3>
	<h4> Fill out the details for your product.</h4>
	{/* <img src={siteLogo}/> */}
		<label >
		Email:
		</label><br/>
		<input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
		{/* when user write in email input box , handleEmailChange()
			function will be called.*/}
		<br/>
		<label >
		Product Name:
		</label><br/>
		<input type="text" value={name} required onChange={(e) => {handleNameChange(e)}} /><br/>
		{ /*when user write in name input box , handleChange()
			function will be called. */}
		<br/>
		<label >
		Price(in rupees):
		</label><br/>
		<input type="text" value={price} required onChange={(e) => {handlePriceChange(e)}} /><br/>
			{ /*when user write in age input box , handleAgeChange()
			function will be called. */}
		<br/>
		<label>
		Description:
		</label><br/>
		<input type="text" value={desc} required onChange={(e) => {handleDescChange(e)}} /><br/>
		<br/>
		<MultiImageInput
			theme={{
				background: '#ffffff',
				outlineColor: '#111111',
				textColor: 'rgba(255,255,255,0.6)',
				buttonColor: '#ff0e1f',
				modalColor: '#ffffff',
			  }}
      		images={images}
      		setImages={setImages}
    	/>
		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
	</Transitions>
);
}

export default MyForm;