import React from 'react';
import { Avatar } from 'antd';

import './NavBar.css'



const NavBar = () => {
    return(
        <div className="NavbarItems">
            <div className="navbar-logo">
                <Avatar src="./bitcoin-mind.png" size="large"/>
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
                        <a className="nav-text" href="cryptocurrencies">Cryptocurrencies</a>
                    </nav>
                </div>
                <div className='nav-links'>
                    <nav className="nav-text">
                        <a className="nav-text" href="exchanges">Exchanges</a>
                    </nav>
                </div>
                <div className='nav-links'>
                    <nav>
                        <a className="nav-text" href="news">News</a>
                    </nav>
                </div>
            </div>
            
        </div>
    )

    /**
     *         <nav className="NavbarItems">
            <h1 className="navbar-logo">CryptoWorld<i className="fab fa-react"></i></h1>
            <div className="menu-icon">
                <i className={click.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click.clicked ? 'nav-menu' : 'nav-menu active'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
     */
    
}

export default NavBar;