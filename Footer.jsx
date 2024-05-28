import React from 'react';
import './Footer.css';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer container-fluid p-4 text-white'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="footer-title">
                
                </div>
                <div className='footer-copyright'>
                    Developed by <h1>Prashath</h1>
                </div>
              
            </div>
        </div >
    )
}

export default Footer;