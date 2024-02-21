import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <nav>
                    <ul className='flex'>
                        <img src={logo} alt="" />
                    </ul>
                    <ul className='flex'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}><span>HOME</span></NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="/galerie" className={({ isActive }) => isActive ? "active-link" : ""}>GALERIE</NavLink> */}
                        </li>
                        <li>
                            <NavLink to="/programmation" className={({ isActive }) => isActive ? "active-link" : ""}>PROGRAMMATION</NavLink>
                        </li>
                        <li>
                            <NavLink to="/billeterie" className={({ isActive }) => isActive ? "active-link" : ""}>BILLETERIE</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>ESPACE ARTISTE</NavLink> */}
                        </li>
                        <li>
                            <NavLink to="/a_propos" className={({ isActive }) => isActive ? "active-link" : ""}>À PROPOS</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
