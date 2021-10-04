import React from 'react';
import './NavBar.scss'

var image = require('../../images/bitcoin-mind.png').default;

const NavBar = () => {
    return(
        <div className="NavbarItems">
            <div className="navbar-logo">
                <img src={image} height={50} width={50}/>
                <h1 className="title-text">CryptoWorld</h1>
            </div>
            <div className='nav-menu'>
                <div className='nav-links'>
                    <nav className="nav-text">
                        <a className="nav-text" href="/">Home</a>
                    </nav>
                </div>
                <div className='nav-links'>
                    <nav className="nav-text">
                        <a className="nav-text" href="/cryptocurrencies">Cryptocurrencies</a>
                    </nav>
                </div>
                <div className='nav-links'>
                    <nav className="nav-text">
                        <a className="nav-text" href="/exchanges">Exchanges</a>
                    </nav>
                </div>
                <div className='nav-links'>
                    <nav>
                        <a className="nav-text" href="/news">News</a>
                    </nav>
                </div>
            </div>
            
        </div>
    )   
}

export default NavBar;