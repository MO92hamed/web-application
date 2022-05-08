import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className='webapp__footer section__padding'>
            <div className='webapp__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            </div>

            <div className='webapp__footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='webapp__footer-links'>
                <div className='webapp__footer-links_logo'>
                    <img src={gpt3Logo} alt="logo" />
                    <p>MOUHAMED AMINE ELABED, <br /> All Rights Reserved</p>
                </div>
                <div className='webapp__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className='webapp__footer-links_div'>
                    <h4>Company</h4>
                    <p>Social Media</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className='webapp__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p> MOUHAMED AMINE ELABED</p>
                    <p>+216 29 493 386</p>
                    <p>mouhamedamineelabed@gmail.com</p>
                </div>
            </div>

            <div className='webapp__footer-copyright'>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
