import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import "./Lyrics.css"

const Lyrics = () => {
    const [lyricsMusics, setLyricsMusics] = useState("")
    
    const getLyricsFromApi= () => {
        axios.get('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime')
        .then(response => setLyricsMusics(response.data))
    }

    useEffect(() =>{
        getLyricsFromApi()
    }, []);


    return (
        <section className="lyrics-countainer">
            <h1>Title chosen song</h1>
            <div className="lyrics-and-story">
                <div>
                    <h4>Paroles</h4>
                    <p className="lyrics-content">{lyricsMusics.lyrics}</p>
                </div>
                <div className="top-story">
                    <h4>Top Story</h4>
                    <p className="top-story-content">BestStory</p>
                </div>
            </div>
        </section>
    )
}

export default Lyrics
