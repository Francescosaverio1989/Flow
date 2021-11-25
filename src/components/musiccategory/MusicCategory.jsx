import React from 'react'
import './MusicCategory.css'
import icone from '../../assets/icones/icone-music.png'

const MusicCategory = () => {
    return (
        <div className="music-category-container">
            <img src={icone}
            className="music-category-icone"
            alt="icone musique" />
            <p>Jazz</p>
        </div>
    )
}

export default MusicCategory
