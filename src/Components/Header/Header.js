import React from 'react';
import logo from '../../logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <header>
                <nav className='header-nav'>
                    <div className="row menu">
                        <div className="col-xl-2">
                            <div className="logo">
                                <a href="/"><img src={logo} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <ul>
                                <li><a href="/Tour">Tour</a></li>
                                <li><a href="/Countries">Countries</a></li>
                                <li><a href="/Bucket">Bucket</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <ul>
                                <li><a href="/login">Log In</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;