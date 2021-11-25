import axios from 'axios';
import React, { useParams, useState, useEffect } from 'react';
import "./ResultsAlbums.css";
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from 'react-helmet';


const ResultsAlbums = () => {

  const { artistName, albumName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAlbums()
  }, []);

  const getAlbums = () => {
    axios
      .get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=7f8f8f5d046ed8eb2174ac55fadb58ae&artist=${artistName}&album=${albumName}&format=json`)
      .then(response => console.log(response.data))
  }


  return (
    <main className="slider">
      <section className="sliderside">

        <Helmet>
          <title>Résultats</title>
        </Helmet>

        <div className="albumName">
          <h1>{albumName}</h1>
        </div>
        <Carousel
          autoPlay
          interval={6000}
          infiniteLoop
          centerMode
        >
          {
            results.filter((albums) => (albums.album.length === 13)).slice(0, 10).map(slide => (
              <div key={slide.album}>
                <img className="imgslide" src={slide.image[0]["#text"]} />
                <div className="overlay">
                  <a href={`/ProductId/${slide.album}`}> <h2 className="overlay__title">{slide.name}</h2>
                  </a>
                </div>
              </div>
            ))}
        </Carousel>
      </section>
    </main>
  )
}

export default ResultsAlbums;