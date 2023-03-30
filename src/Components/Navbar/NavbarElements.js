import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #013f88;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
font-size: 18px;
/* Third Nav */
/*justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem;
height: 100%;
font-size: 18px;
font-weight: bold;
cursor: pointer;
&.active {
	color: #FFFF4D;
}
&:hover {
	font-size: 21px;
  }
`;

export const Bars = styled(FaBars)`
display: none;
color: #000000;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
//margin-left: 20px;
text-align: center;
@media screen and (max-width: 768px) {
	display: none;
}
`;
