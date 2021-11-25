import React from 'react'
import './AlbumSingle.css'
import icone from '../../assets/icones/icone-music.png'

const AlbumSingle = ({name, mbid, artist, image}) => {
    return (
        <div className="album-single-countainer">
            <img src={ image === "" ? icone : image } alt={`Album representation of ${name}`} className="album-single-image" />
            <div className="album-single-info">
                <h3>{name}</h3>
                <h4>{artist}</h4>
                <p>2019</p>
            </div>
        </div>
    )
}

export default AlbumSingle
