import React from 'react'
import './MusicCategories.css'
import MusicCategory from '../musiccategory/MusicCategory'

const MusicCategories = () => {
    return (
        <section className="music-categories-section">
            <h2>Categories</h2>
            <MusicCategory />
            <MusicCategory />
            <MusicCategory />
            <MusicCategory />
            <MusicCategory />


        </section>
    )
}

export default MusicCategories
