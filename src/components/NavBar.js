import React from "react";
import { BrowserRouter as Router, Routes ,Route, Link} from "react-router-dom";
import '../css/NavBar.css'
import { Figure } from "react-bootstrap";

const NavBar = () => {

  return (
    <div className='NavBar'>
      <ul>
        <Link to='/'>
        {/* <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="100x100"
                src= '../images/Lot.jpg'
              />
          </Figure> */}
          <li className='home'>
             {/* <img src={require('../images/LogoGold.jpg')} alt=''/> */}
              Home
             </li>
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

        {/* <Link to='/Signup'>
          <li className='signup'>Signup</li>
        </Link>
       */}
    
    
      </ul>
    </div>
    
  );
}

export default NavBar