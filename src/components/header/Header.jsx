<<<<<<< HEAD
import React from 'react';

const Header = ({ name }) => {
    return (
        <div>
            <h1>Welcome to {name}</h1>  
        </div>
    )
}

export default Header;
=======
import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo-flow.png'

const Header = () => {
    return (
        <header className="home-header">
            <img src={logo} className="home-logo" alt="Logo flow" />
            <p className="home-header-slogan">Evadez-vous par les mots</p>
        </header>
    )
}

export default Header
>>>>>>> main
