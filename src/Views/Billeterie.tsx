import React, { Component } from 'react';

export default class Billeterie extends Component {
    

    render() {
        return (
            <div className='Billeterie'>
                <header className='Header'>
                    <h2>Billeterie</h2>
                </header>
                <nav>
                    <ul>
                        <span></span>
                            <div>
                                <li>mars 2024</li>
                            </div>
                        <span/>
                    </ul>
                </nav>
                <div className="shop">
                    <div>
                        <p>Jeudi 14 mars 2024</p>
                        <div className="content">
                            <h3>entrée simple</h3>
                            <div>
                                <p>prix libre</p>
                                <p>|</p>
                                <button>reserver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
