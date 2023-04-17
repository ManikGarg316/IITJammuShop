import React from 'react';
import Transitions from '../Transition'
// import GoogleLogin from 'react-google-login';
// import { useState } from 'react';

const Home = () => {
	// const [loginData, setLoginData] = useState(
	// 	localStorage.getItem('loginData')
	// 	? JSON.parse(localStorage.getItem('loginData'))
	// 	: null
	// );

	// const handleFailure = (result) => {
	// 	alert(JSON.stringify(result));
	// };

	// const handleLogin = async (googleData) => {
	// 	const res = await fetch('api/google-login', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			token: googleData.tokenId,
	// 		}),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	});

	// 	const data = await res.json();
	// 	setLoginData(data);
	// 	localStorage.setItem('loginData', JSON.stringify(data));
	// };

	// const handleLogout = () => {
	// 	localStorage.removeItem('loginData');
	// 	setLoginData(null);
	// }

	return (
	<>
		<Transitions>
		<div>
		<h1>This is the official shop of IIT Jammu</h1>
		</div>
		</Transitions>
		{/* <div>
			{loginData ? (
				<div>
					<h3>You logged in as {loginData.email}</h3>
					<button onClick={handleLogout}>Logout</button>
				</div>
			)
			: null
			}
			<GoogleLogin
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				buttonText="Log in with Google"
				onSuccess={handleLogin}
				onFailure={handleFailure}
				cookiePolicy={'single_host_origin'}>
			</GoogleLogin>
		</div> */}
	</>
	);
};

export default Home;
