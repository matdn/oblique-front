import React, { Component } from 'react';
import BackgroundGradiant from '../../assets/gradiantBackground.png';

export default class Programmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.initialItems(), 
            centeredIndex: null, 
        };
        this.navRef = React.createRef();
        this.timeoutId = null; 
    }

    initialItems() {
        return Array.from({ length: 4 }, (_, index) => `Item ${index + 1}`);
    }

    componentDidMount() {
        this.navRef.current.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        this.navRef.current.removeEventListener('scroll', this.handleScroll);
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleScroll = () => {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.setState({ centeredIndex: null });
        }

        this.timeoutId = setTimeout(() => {
            const navElement = this.navRef.current;
            const centerPosition = navElement.scrollTop + (navElement.offsetHeight / 2);
            let closestIndex = null;
            let closestDistance = Infinity;

            this.state.items.forEach((_, index) => {
                const ulElement = navElement.children[index];
                const ulCenterPosition = ulElement.offsetTop + (ulElement.offsetHeight / 2);
                const distance = Math.abs(ulCenterPosition - centerPosition);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            this.setState({ centeredIndex: closestIndex }, () => {
                this.timeoutId = setTimeout(() => {
                }, 500); 
            });
        }, 100);
    }

    render() {
        return (
            <div className='Programmation'>
                <header className='Header'>
                    <h2>Programmation</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h4>
                </header>
                <nav>
                    <ul>
                        <span></span>
                            <div>
                                {/* <li>Décembre 2023</li> */}
                                <li>mars 2024</li>
                                {/* <li>juin 2024</li> */}
                                {/* <li>Décembre 2024</li> */}
                            </div>
                        <span/>
                    </ul>
                </nav>
                <div className="prog">
                    <div className="img">
                        <img src={BackgroundGradiant} alt="" />
                    </div>
                    <nav ref={this.navRef} style={{overflowY: 'auto', maxHeight: '600px'}}>
                        {this.state.items.map((item, index) => (
                            <ul key={index} className={this.state.centeredIndex === index ? 'centered' : ''}>
                                <li className='styleTitle'>DANCE</li>
                                <li className='nameTitle'>{item}</li>
                            </ul>
                        ))}
                    </nav>
                </div>
            </div>
        );
    }
}
