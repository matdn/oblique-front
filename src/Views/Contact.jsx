import React, { Component } from 'react'
import { gsap } from 'gsap';

export default class Contact extends Component {
    componentDidMount() {
        gsap.fromTo(".background", 
        { width: 0 }, 
        { duration: 1.5, width: '100%', ease: "power3.out" }); 
        gsap.to(".flower", { duration: 2.5, rotation: 360, ease: "elastic.out(1, 0.3)" });
    }

    render() {
        return (
            <div className='Contact'>
                <div className='content'>
                    <header className='Header'>
                        <h2>CONTACT</h2>
                        <h4>Oblique te plait?
                        N’hesite pas à nous envoyer un petit 
                        message surtout si tu souhaites 
                        faire partie de la programmation !</h4>
                    </header>
                </div>
                <div className='image'>
                    <img className="flower" src="/assets/flower.png"/>
                    <div className="background"/>
                </div>
            </div>
        )
    }
}
