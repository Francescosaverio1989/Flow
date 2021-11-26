import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import "./Lyrics.css"

const Lyrics = ({chosenSingle, chosenArtist}) => {
    const [lyricsMusics, setLyricsMusics] = useState("")
    
    const getLyricsFromApi= () => {
        axios.get(`https://api.lyrics.ovh/v1/${chosenArtist}/${chosenSingle}`)
        .then(response => setLyricsMusics(response.data))
        .catch(err => setLyricsMusics("No Lyrics Available"))
    }

    console.log("chosen single -----")
    console.log(chosenSingle)
    console.log("chosen artist -----")
    console.log(chosenArtist)


    useEffect(() =>{
        getLyricsFromApi()
    }, []);


    return (
        <section className="lyrics-countainer">
            <h1>{chosenSingle}</h1>
            <div className="lyrics-and-story">
                <div>
                    <h4>Paroles</h4>
                    <p className="lyrics-content">{ lyricsMusics === "No Lyrics Available" ? "Sorry no lyrics available" : lyricsMusics.lyrics }</p>
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
