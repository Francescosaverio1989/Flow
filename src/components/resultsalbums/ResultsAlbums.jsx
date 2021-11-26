import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./ResultsAlbums.css";
import { Helmet } from 'react-helmet';


const ResultsAlbums = ({artist, album}) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAlbums()
  }, []);

  const getAlbums = () => {
    axios
      .get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=7f8f8f5d046ed8eb2174ac55fadb58ae&artist=${artist}&album=${album}&format=json`)
      .then(response => setResults(response.data.album))
  }

  console.log(results)

  return (
    <main className="slider">
      <section className="sliderside">

        <Helmet>
          <title>Résultats</title>
        </Helmet>

      </section>
    </main>
  )
}

export default ResultsAlbums;
