import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './AlbumList.css'
import AlbumSingle from '../albumsingle/AlbumSingle'

const AlbumList = ({chosenInspiration}) => {

    const [albumList, setAlbumList] = useState([]);
    console.log(chosenInspiration);

    useEffect(() => {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${chosenInspiration}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
        .then(res => res.data.results.albummatches.album)
        .then(data => setAlbumList(data))

    }, [chosenInspiration]);

    return (
        <section className="album-list-countainer">
            {
                albumList.map((album, index) => {
                    const {name, artist, image} = album;

                    return (
                        <AlbumSingle key={index} name={name} artist={artist} image={image[1]["#text"]}/>  
                    )
                })
            }      
        </section>
    )
}

export default AlbumList
