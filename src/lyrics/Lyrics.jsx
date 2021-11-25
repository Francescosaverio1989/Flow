import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { DisplayLyrics } from './DisplayLyrics'

const Lyrics = () => {
    const [lyricsMusics, setLyricsMusics] = useState("")
    
    const getLyricsFromApi= () => {
        axios.get('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime')
        .then(response => setLyricsMusics(response.data))
    }

    useEffect(() =>{
        getLyricsFromApi()
    }, []);
    console.log(lyricsMusics)

    



    return (
        <div>
            <h1>Title</h1>
            <div>
                <DisplayLyrics lyrics={lyricsMusics}/>
            </div>
        </div>
    )
}

export default Lyrics
