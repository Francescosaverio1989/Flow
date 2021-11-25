import React from 'react'
import './AlbumSingle.css'

const AlbumSingle = ({name, mbid, artist, image}) => {
    return (
        <div className="album-single-countainer">
            <img src={image} alt="album image" className="album-single-image" />
            <div className="album-single-info">
                <h3>{name}</h3>
                <h4>{artist}</h4>
                <p>2019</p>
            </div>
        </div>
    )
}

export default AlbumSingle
