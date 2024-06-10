import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../public/assets/logo.png';

export default class Header extends Component {
   
    burgerClick = () => {
        const header = document.querySelector('.Header');
        header.classList.add('active');
    }
    crossClick = () => {
        const header = document.querySelector('.Header');
        header.classList.remove('active');
    }
    render() {
        return (
            <div className='Header'>
                <nav>
                    <ul className='flex logo'>
                        <img src={logo} alt="" />
                    </ul>
                    <div className="burger-menu" onClick={this.burgerClick}>
                        <span></span>
                    </div>
                    <div className='cross-menu' onClick={this.crossClick} >
                        <span></span>
                    </div>
                    <ul className='flex link'>
                        <li>
                            <NavLink onClick={this.crossClick} to="/" className={({ isActive }) => isActive ? "active-link" : ""}><span>ACCUEIL</span></NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="/galerie" className={({ isActive }) => isActive ? "active-link" : ""}>GALERIE</NavLink> */}
                        </li>
                        <li>
                            <NavLink onClick={this.crossClick} to="/programmation" className={({ isActive }) => isActive ? "active-link" : ""}>PROGRAMMATION</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={this.crossClick} to="/billeterie" className={({ isActive }) => isActive ? "active-link" : ""}>BILLETERIE</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>ESPACE ARTISTE</NavLink> */}
                        </li>
                        <li>
                            <NavLink onClick={this.crossClick} to="/a_propos" className={({ isActive }) => isActive ? "active-link" : ""}>À PROPOS</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={this.crossClick} to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
