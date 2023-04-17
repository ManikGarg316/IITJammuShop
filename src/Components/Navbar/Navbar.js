import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import storeLogo from "../../assets/site-logo2.png"
import AddIcon from '@mui/icons-material/Add';
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
				<IconButton>
					<AddIcon sx={{ color: "white"}}/>
				</IconButton>
				
			</NavLink>
			<NavLink to='/store'>
				Store
			</NavLink>
			<NavLink to='/about'>
				About
			</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
