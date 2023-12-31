import React, { Component } from "react";
import HeroPict from "../../assets/heroHome.png";
import About from "../../assets/About.png";
import Slide1 from "../../assets/Slide1.png";
import Slide2 from "../../assets/slide2.png";
import Staff from "../../assets/staffOblique.png";
import Vector from "../../assets/Vector.png"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';




export default class Home extends Component {
    constructor(props) {
        super(props);
        gsap.registerPlugin(ScrollTrigger);
        this.sliderRef = React.createRef();
        this.buttonRef = React.createRef();
        this.state = {
            x: 0,
            y: 0,
        };
    }

    componentDidMount() {
        console.log("hello")
        this.initAnimation();  
    }

    handleMouseMove = (event) => {
        const button = this.buttonRef.current;
        if (button) {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            this.setState({ x, y });
        }
    };

    handleMouseLeave = () => {
        if (this.leaveTimeout) clearTimeout(this.leaveTimeout);
        this.leaveTimeout = setTimeout(() => {
            this.setState({ x: 0, y: 0 });
        }, 100);
    };

    initAnimation() {
        gsap.to(".AboutImg", {
            height: "60vh",
            scrollTrigger: {
                trigger: ".Content",
                start: "top-=150",
                end: "top+=150",
                // markers: true,
                scrub: true,
            }
        });
    }
    render() {
        const { x, y } = this.state;
        const moveStyle = {
            transform: `translate(${x}px, ${y}px)`,
        };
        return (
            <div className="Home">
                <div className="Hero">
                    <div>
                        <h2>
                            <span>OBLIQUE</span>
                            <br/>
                            FESTIVAL
                        </h2>
                        <button
                            ref={this.buttonRef}
                            onMouseMove={this.handleMouseMove}
                            onMouseLeave={this.handleMouseLeave}
                            style={moveStyle}
                        >
                            MORE INFOS
                        </button>
                    </div>
                    <div className="HeroImg">
                        <img className="Vector" src={Vector} alt=""/>
                        <img src={HeroPict} alt=""/>
                    </div>
                </div>
                <div className="Content">
                    <div className="Column">
                        {/* <h3>About us</h3> */}
                        <div className="AboutImg"></div>
                    </div>
                    <div className="Description">
                        {/* <div className="dashedLine"></div> */}
                        <p>
                            <span>Oblique</span> est un festival <span>d’arts vivants</span>{" "}
                            qui aspire à faire émerger{" "}
                            <span>la parole des jeunes</span> par l’art, soutenu
                            par Emmanuel Demarcy Mota et Frédérique Aït-Touati.
                        </p>
                    </div>
                </div>
                <div className="Slider Content Column">
                    <h3>Evénements à venir</h3>
                    <div className="Slides">
                        <div className="Column">
                            <img src={Slide1} alt=""/>
                            <h4>decembre 2023</h4>
                        </div>
                        <div className="Column">
                            <img src={Slide2} alt=""/>
                            <h4>mars 2024</h4>
                        </div>
                        <div className="Column">
                            <img src={Staff} alt="" />
                            <h4>juin 2024</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
