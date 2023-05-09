import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import './signIn.css'
import Transitions from "../Transition";
import axios from "axios";
// import googleicon from "../assets/Screenshot_2020-05-15_20-22-53_BDZ4h6i_1.png";
import googleLogo from "../assets/google.svg";
import ShopLogo from "../assets/ShopLogo.svg";
import Cart from "../assets/black-friday-elements-assortment_23-2149074076-removebg-preview.png";
import { useNavigate } from "react-router-dom";
const SignIn = () => {

    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                // console.log(res.data);
                var today = new Date();
                res.data["time_of_signin"] = today;
                localStorage.setItem('IIT_Jammu_Shop_loginData',JSON.stringify(res.data));
                navigate("/home");
                window.location.reload();
            } catch (err) {
                console.log(err);
            }

        }
    });

    return (
        <>
            <Transitions>
                {/* <div className="background">
                    
                </div> */}
                <div className="background">
                
                    <img className="custom-logo" src={ShopLogo} alt="IIT Jammu Shop Logo" />
                    <div className="container">
                        <img className="img-style" src={Cart} alt="Background Image" />
                        <button type="button" onClick={login} className="GoogleButton">
                            <div className="icon" aria-hidden="true">
                                <img className="custom" src={googleLogo} alt="Sign in with Google icon"/>
                                <b>Sign in with Google</b>
                            </div>
                        </button>
                    </div>
                </div>
            </Transitions>
        </>
        );
};

export default SignIn;