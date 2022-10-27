import React from 'react';
import logo from '../../logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <header>
                <nav className='header-nav'>
                    <ul>
                        {/* <li><a href="/"><img className='logo-img' src={logo} alt="" /></a></li> */}
                        <li><a href="/Tour">Tour</a></li>
                        <li><a href="/Countries">Countries</a></li>
                        <li><a href="/Bucket">Bucket</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;