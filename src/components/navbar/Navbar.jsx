import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => {
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wwa'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#Features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
    </>
}
const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);
    return (
        <div className='webapp__navbar'>
            <div className='webapp__navbar-links'>
                <div className='webapp__navbar-links_logo'>
                    <img src={logo} alt='logo'  />
                </div>
                <div className='webapp__navbar-links_container'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#wwa'>What is GPT?</a></p>
                    <p><a href='#possibility'>Open AI</a></p>
                    <p><a href='#Features'>Case Studies</a></p>
                    <p><a href='#blog'>Library</a></p>
                </div>
            </div>
            <div className='webapp__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='webapp__navbar-menu'>
                {toggleMenu ? 
                <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='webapp__navbar-menu_container scale-up-center'>
                    <div className='webapp__navbar-menu_container-links'>
                       <p><a href='#home'>Home</a></p>
                       <p><a href='#wwa'>What is GPT?</a></p>
                       <p><a href='#possibility'>Open AI</a></p>
                       <p><a href='#Features'>Case Studies</a></p>
                       <p><a href='#blog'>Library</a></p>
                       <div className='webapp__navbar_container-links-sign'>
                          <p>Sign in</p>
                          <button type='button'>Sign up</button>
                       </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Navbar
