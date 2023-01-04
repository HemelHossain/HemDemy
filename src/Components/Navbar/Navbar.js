import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = (props) => {
    let activeStyle = { 
        "color":"red",
    }
    let unActive ={
        "background": "",
        "padding": "7px",
        "borderRadius": "5px"
        
    }
    const {name, link} = props.route;
    return (
        <li className='text-xl md:mt-0 sm:mt-8 '>
            <NavLink className='md:mr-8 hover:bg-black md:text-white sm:hover:text-white sm:text-black hover:px-2' style={({isActive}) => isActive? activeStyle : unActive} to={link}>{name}</NavLink>
        </li>
    );
};

export default Navbar;