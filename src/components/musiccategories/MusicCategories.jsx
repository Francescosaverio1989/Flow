import React from 'react'
import './MusicCategories.css'
import MusicCategory from '../musiccategory/MusicCategory'
import icone from '../../assets/icones/icone-music.png'

const MusicCategories = ({setChosenInspiration,
    handleClick}) => {

    const inspirations = ["Believe", "Happy", "Calm", "Joy", "Danse", "Cry"];

    return (
        <section className="music-categories-section">

            <h2>What inspires you today?</h2>

            {inspirations.map((inspiration, index) => (
                <div className="music-category-container" key={index} value={inspiration} onClick={handleClick}>
                    <img src={icone}
                    className="music-category-icone"
                    value={inspiration} alt="icone musique" 
                    onClick={handleClick}/>
                    <button type="button" value={inspiration}
                    onClick={handleClick}>{inspiration}</button>
                </div>
            ))}
        </section>
    )
}

export default MusicCategories
