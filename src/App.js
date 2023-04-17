import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Store from './pages/store';
import AddItem from './pages/addItem';
import { AnimatePresence } from 'framer-motion';
import MyItems from './pages/myItems';

const Animated = () => {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path='/' exact element ={<Home/>}></Route>

                    <Route path='/home' exact element ={<Home/>}></Route>

                    <Route path='/about' element ={<About/>}></Route>

                    <Route path='/store' element ={<Store/>}></Route>

                    <Route path='/addItem' element ={<AddItem/>}></Route>

                    <Route path='/myItems' element = {<MyItems/>}></Route>
                </Routes>
            </AnimatePresence>
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
