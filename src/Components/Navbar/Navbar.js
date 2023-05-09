import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import storeLogo from "../../assets/site-logo2.png"
import {Add, Store, LocalMall, Info} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
const Navbar = () => {
return (
	<>
	<Nav>
		<Bars/>
		<NavMenu>
			<NavLink to='/home'><a href="" className="logo"><img style={{ width: "48%", height: "60%" }} className="logo" src={storeLogo} alt="IIT Jammu logo"/></a>
			</NavLink>
			<Nav className="me-auto">
    		</Nav>
			<Nav className="me-auto">
    		</Nav>
			<NavLink to='/addItem'>
				<IconButton title="Add item to store">
					<Add sx={{ color: "white"}}/>
				</IconButton>
				
			</NavLink>
			<NavLink to='/store'>
				<IconButton title="Store">
					<Store sx={{ color: "white"}}/>
				</IconButton>
			</NavLink>
			<NavLink to='/myItems'>
				<IconButton title="My Items">
					<LocalMall sx={{ color: "white"}}/>
				</IconButton>
			</NavLink>
			<NavLink to='/about'>
				<IconButton title="About">
					<Info sx={{ color: "white"}}/>
				</IconButton>
			</NavLink>
			
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
