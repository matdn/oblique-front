import React, { Component } from "react";
import HeroPict from "/assets/heroHome.png";
import Vector from "/assets/Vector.png"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";


export default class Home extends Component {
    constructor(props) {
        super(props);
        gsap.registerPlugin(ScrollTrigger);
        this.sliderRef = React.createRef();
        this.buttonRef = React.createRef();
        this.state = {
            events: [],
            x: 0,
            y: 0,
        };
    }

    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = () => {
        fetch('/festival_events.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    events: data.events,
                    selectedEventName: data.events[0]?.name,
                })
            })
            .catch(error => console.error("Error loading the events:", error));
    };
    

    handleMouseMove = (event) => {
        const slider = this.sliderRef.current;
        if (slider) {
            const rect = slider.getBoundingClientRect();
            const x = event.clientX - rect.left; 
            const xRatio = x / rect.width;
            const scrollAmount = xRatio * (slider.scrollWidth - rect.width);
            slider.scrollLeft = scrollAmount;
        }
    };


    handleMouseLeave = () => {
        if (this.leaveTimeout) clearTimeout(this.leaveTimeout);
        this.leaveTimeout = setTimeout(() => {
            this.setState({ x: 0, y: 0 });
        }, 100);
    };

    render() {
        const { x, y } = this.state;
        const { events } = this.state;
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
                <div className="HomeInfos">
                    <div className="Content">
                    <h3>About us</h3>
                        <div className="Column">
                            <div className="AboutImg"></div>
                        </div>
                        <div className="Description">
                            <p>
                                <span>Oblique</span> est un festival <span>d’arts vivants</span>{" "}
                                qui aspire à faire émerger{" "}
                                <span>la parole des jeunes</span> par l’art, soutenu
                                par Emmanuel Demarcy Mota et Frédérique Aït-Touati.
                            </p>
                        </div>
                    </div>
                    <div className="Slider Content Column" >
                        <h3>Evénements à venir</h3>
                        <div className="Slides">
                            {events.map(event => (
                                <Link to={`/programmation`}>
                                    <div key={event.name} className="Column">
                                        <img src={event.image_path} alt={event.name}/>
                                        <h4><span><span>{event.name}</span></span></h4>
                                    </div>
                                </Link>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
