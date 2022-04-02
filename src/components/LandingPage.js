import React, {useEffect, useState} from "react";
import About from "./About";
import '../css/LandingPage.css'
import Figure from 'react-bootstrap/Figure'

function LandingPage() {
   
    return (
        <div>
            <img src={require('../images/Lot.jpg')} alt='classic'/>
            <div className='content'>
             LandingPage
                <div className="about">
                    <About/>
                </div>
            </div> 
        </div>
    );
}

export default LandingPage