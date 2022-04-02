import React from "react";
import { BrowserRouter as Router, Routes ,Route, Link} from "react-router-dom";
import '../css/NavBar.css'


const NavBar = () => {

  return (
    <div className='NavBar'>
      <ul>
        <Link to='/'>
          <li className='home'>Home</li>
        </Link>

        <Link to='Cars'>
          <li className='cars'>Cars</li>
        </Link>

        <Link to='/CustomOrder'>
          <li className='specialOrder'>Special Order</li>
        </Link>

        <Link to='/Profile'>
          <li className='profile'>Profile</li>
        </Link>

        <Link to='/Signup'>
          <li className='signup'>Signup</li>
        </Link>
      
    
    
      </ul>
    </div>
    
  );
}

export default NavBar