import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Store from './pages/store';
import AddItem from './pages/addItem';
import MyItems from './pages/myItems';
import { AnimatePresence } from 'framer-motion';
import { projectFirestore } from './firebase/config';
import SignIn from './pages/signIn';
import Protected from './Protected';

const Animated = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [ProductsAreHere, setFlag] = useState(false);
    const [loggedEmail, setEmail] = useState("");
    const [isLogged, setLogin] = useState(null);
    const [LoginData, setLoginData] = useState(() => {
        const value = localStorage.getItem('IIT_Jammu_Shop_loginData');
            if (value) {
                return JSON.parse(value);
            } else {
                return null;
            }
    });
    useEffect(() => {
        var currentDate = new Date();
        if(LoginData)
        {
            var difference = Date.parse(currentDate) - Date.parse(LoginData.time_of_signin);
            var daysDifference = Math.floor(difference/1000/60/60/24);
            // console.log(daysDifference);
            if(daysDifference >= 2){
                //login Again
                localStorage.removeItem('IIT_Jammu_Shop_loginData');
                setLogin(false);
            }
            else{
                // console.log(LoginData.email);
                setEmail(LoginData.email);
                setLogin(true);
            }
        }
        else{
            setLogin(false);
        }
    }, [LoginData]);

	async function fetchMyAPI() {
        const products = [];
        const querySnapshot = await projectFirestore.collection('Products').get();
        querySnapshot.forEach((doc) => {
        // setProducts((prevState) => [...prevState, { id: doc.id, ...doc.data()}]);
        products.push({ id: doc.id, ...doc.data()});
        })
        setFlag(true);
        return products;
			// console.log(products);
    }

    useEffect(() => {
        // Fetch the initial list of image URIs
            fetchMyAPI().then(setProducts);
    
        // Set up a polling mechanism to fetch new image URIs every 10 seconds
        const intervalId = setInterval(async () => {
            const newProducts = await fetchMyAPI();
            if (newProducts.length !== products.length) {
                setProducts(newProducts);
            }
        }, 10000);
        
        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [products]);
    return (
        <>
            {ProductsAreHere ?
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path='/' exact element ={<Protected isLoggedIn={isLogged}><Home/></Protected>}></Route>

                        <Route path='/home' exact element ={<Protected isLoggedIn={isLogged}><Home/></Protected>}></Route>

                        <Route path='/about' element ={<About/>}></Route>

                        <Route path='/store' element ={<Protected isLoggedIn={isLogged}><Store products={products}/></Protected>}></Route>

                        <Route path='/addItem' element ={<Protected isLoggedIn={isLogged}><AddItem loggedEmail={loggedEmail}/></Protected>}></Route>

                        <Route path='/signIn' element ={<SignIn/>}></Route>

                        <Route path='/myItems' element = {<Protected isLoggedIn={isLogged}><MyItems products={products} LoggedInEmail={loggedEmail}/></Protected>}></Route>
                    </Routes>
                </AnimatePresence>
            : null}
        </>
    )
}

function App() {
    return (
        <div className="App">
                <>
                    <Router>
                        <Navbar />
                        <Animated />
                    </Router>
                </>
        </div>
    );
}

export default App;
