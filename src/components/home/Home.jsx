import React from 'react'
import './Home.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MusicCategories from '../musiccategories/MusicCategories'
import AlbumList from '../albumlist/AlbumList'

const Home = () => {
    return (
        <>
            <Header />
            <main className="home-main-container">
                <MusicCategories />
                <AlbumList />
            </main>
            <Footer />           
        </>
    )
}

export default Home
