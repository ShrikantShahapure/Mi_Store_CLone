import React from 'react';
import '../styles/Navbar.css';
import logo1 from './logo1.png'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link to="https://www.mi.com/in/">
                <img id='logoImage' src={logo1} />
            </Link>
        </div>
            <Link className='navlinks' to='https://www.mi.com/in/store'>Store</Link>
            <Link className='navlinks' to='https://www.mi.com/in/phone'>Phone</Link>
            <Link className='navlinks' to='https://www.mi.com/in/smart-home'>TV & Smart home</Link>
            <Link className='navlinks' to='https://www.mi.com/in/smart-office'>Laptop & Tablet</Link>
            <Link className='navlinks' to='https://www.mi.com/in/life-style'>LifeStyle</Link>
            <Link className='navlinks' to='https://www.mi.com/in/discover'>Discover</Link>
            <Link className='navlinks' to='https://www.mi.com/in/support'>Support</Link>
        <div className='searchbox'> 
        <input type="text" placeholder='Search products'/>
        <i className="fas fa-search"></i>
        </div>
    </div>
  )
}


export default Navbar