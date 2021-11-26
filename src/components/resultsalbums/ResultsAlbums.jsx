import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./ResultsAlbums.css";
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from 'react-helmet';


const ResultsAlbums = ({ artist, album }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAlbums()
  }, []);

  const getAlbums = () => {
    axios
      .get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=7f8f8f5d046ed8eb2174ac55fadb58ae&format=json`)
      .then(response => {
        console.log(response.data.topalbums.album)
        setResults(response.data.topalbums.album)
      })
  }

  console.log(results)

  return (
    <main className="slider">
      <section className="sliderside">

        <Helmet>
          <title>Albums</title>
        </Helmet>

        <div className="albumName">
          <h1>{album}</h1>
          <h3>{artist}</h3>
        </div>
        <Carousel
          autoPlay
          interval={6000}
          infiniteLoop
          centerMode
        >
          {
            results.filter(album => album.length === 10);
}

          console.log(results);
            


          {/*}.slice(0, 9)
            .map(slide => (
              <div key={slide.album}>
            <img className="imgslide" src={slide.album.image[0]["#text"]} alt="" />
            <div className="overlay">
              <a href={`/Albums/${slide.album}`}> <h2 className="overlay__title">{slide.name}</h2>
              </a>
            </div>
          </div>
            ))*/}
        </Carousel>
      </section>
    </main>
  )
}

export default ResultsAlbums;

/*<div>
                 <img alt="" src={album} />
                 <p className="legend">Legend 1</p>
               </div>
               <div>
                 <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                 <p className="legend">Legend 2</p>
               </div>
               <div>
                 <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                 <p className="legend">Legend 2</p>
               </div>
               <div>
                 <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                 <p className="legend">Legend 2</p>
               </div>*/
