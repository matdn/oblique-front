import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtisteSingle = () => {
    const [artiste, setArtiste] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const loadArtistData = (artisteId) => {
            fetch('/festival_events.json')
                .then(response => response.json())
                .then(data => {
                    const foundArtist = data.events
                        .flatMap(event => event.artists)
                        .find(artist => artist.id === artisteId);
                    setArtiste(foundArtist);
                })
                .catch(error => console.error("Error loading the artist:", error));
        };

        loadArtistData(id);
    }, [id]); 

    if (!artiste) return <div>Loading artist...</div>;

    return (
        <div>
            <h2>{artiste.first_name} {artiste.last_name}</h2>
            <p>Style: {artiste.art_style}</p>
            <img src={artiste.photo_path} alt={`${artiste.first_name} ${artiste.last_name}`} />
        </div>
    );
};

export default ArtisteSingle;
