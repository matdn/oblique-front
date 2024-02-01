import React, { Component } from 'react'
import AntoineC from '../../assets/AntoineC.png'
export default class Programmation extends Component {
    render() {
        return (
        <div className='Programmation'>
            <header className='Header'>
                <h2>Programmation</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h4>
            </header>
            <nav>
                <ul>
                    <span></span>
                        <div>
                            <li>DEcembre 2023</li>
                            <li>mars 2024</li>
                            <li>juin 2024</li>
                            <li>DEcembre 2024</li>
                        </div>
                    <span/>
                </ul>
            </nav>
            <div className="prog">
                <div className="img">
                    <img src={AntoineC} alt="" />
                </div>
                <nav>
                    <ul>
                        <li className='styleTitle'>DANCE</li>
                        <li className='nameTitle firstElement'>Lorem IPSUM</li>
                    </ul>
                    <ul>
                        <li className='styleTitle'>DANCE</li>
                        <li className='nameTitle'>Lorem IPSUM</li>
                    </ul>
                    <ul>
                        <li className='styleTitle'>DANCE</li>
                        <li className='nameTitle'>Lorem IPSUM</li>
                    </ul>
                    <ul>
                        <li className='styleTitle'>DANCE</li>
                        <li className='nameTitle'>Lorem IPSUM</li>
                    </ul>
                </nav>
            </div>
        </div>
        )
    }
}
