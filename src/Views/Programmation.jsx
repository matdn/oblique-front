import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Programmation extends Component {
    state = {
        events: [],
        selectedEventName: '', 
    };

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

    selectEvent = (name) => {
        this.setState({ selectedEventName: name });
    };

    render() {
        const { events, selectedEventName } = this.state;
        const selectedEvent = events.find(event => event.name === selectedEventName);

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
                            {events.map(event => (
                                <li  className={event.name === selectedEventName ? 'selectedEvent' : ''} key={event.name} onClick={() => this.selectEvent(event.name)}>
                                    {event.name + " (" + event.month + ")"}
                                </li>
                            ))}
                        </div>
                        <span/>
                    </ul>
                </nav>
                <div className="prog">
                    {selectedEvent && ( 
                        <div key={selectedEvent.name} className="Column">
                            <h4><span><span>{selectedEvent.name}</span></span></h4>
                            <img className="eventBackground" src={selectedEvent.image_path} alt={selectedEvent.name}/>
                            <p>{selectedEvent.description}</p>
                            <h4>Artists</h4>
                            <div>
                            {selectedEvent.artists.map(artist => (
                                <Link to={`/artiste/${artist.id}`} key={artist.first_name + artist.last_name} className="artiste">
                                    <div className="artiste" key={artist.first_name + artist.last_name}>
                                        <img src={artist.photo_path} alt={`${artist.first_name} ${artist.last_name}`}/>
                                        <p>{artist.first_name} {artist.last_name} - {artist.art_style}</p>
                                    </div>
                                </Link>
                            ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
