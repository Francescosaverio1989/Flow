
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './Album.css';
import logo from '../../assets/images/logo-flow.png'
import "./ResultsAlbums.css";

export const Album = ({artist, album, setChosenSingle, handleSingleChoice, setChosenArtist}) => {

  const [chosenAlbum, setChosenAlbum] = useState();
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

  const filteredResults = [];

  results.filter((album, index) => {
    if (index < 10){
      filteredResults.push(album)
    }
  })

  setChosenArtist(artist);

  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artist}&album=${album}&format=json`)
        .then(data =>
        data.data.album && setChosenAlbum(data.data.album))
      }
        album && artist ? getData() : console.log(`albumName et artistName ne sont pas définis`);
    }, [album, artist]);

    console.log("The chosen album is : *******")
    console.log(chosenAlbum)

    return (
      <div>
        <Link to={`/`}><img src={logo} className="header-album-logo" alt="Logo flow" /></Link>
        
        { chosenAlbum &&
          <>
            <div className="header-album-container">

              <div className="header-album-img-container">            
                <img className="header-album-img" src={chosenAlbum.image[4]["#text"]} alt={chosenAlbum.image['#text']} />
              </div> 

              <div className="header-album-col2">
                <h2 className ="header-album-album">{chosenAlbum.name}</h2>
                <h3 className ="header-album-artist">{chosenAlbum.artist}</h3>
                {/* <p>wiki : {album.wiki.key=(content)}</p> */}
                {/* <p className ="header-album-wiki">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p className ="header-album-wiki">Adipisci est quis amet incidunt laborum dignissimos odio molestiae autem, dolorum architecto repellendus cum modi sit excepturi ipsam dolor facere numquam deserunt.</p> */}
                {/* released */}
                {/* <p className ="header-album-Released">Released : 2021-01-10</p> */}
                <button className="header-album-link"><a href={chosenAlbum.url} target="_blank">Listen on Last FM</a></button>

              </div>  
            </div>  

            <main className="slider">
      <section className="sliderside">

        {/* <Carousel
          autoPlay
          interval={6000}
          infiniteLoop
          centerMode
        >
        
          {
          filteredResults.slice(0, 9).map((slide) => {
          
          return (
            <div key={slide.name}>
              <img id="imgslide" src={slide.image[3]["#text"]} alt={`Couverture de l'album ${slide.name}`} />
              
            </div>
            )})
          }
        </Carousel> */}
      </section>
    </main>

            <div className="single-tracks">
              {chosenAlbum.tracks.track.map((song, index) => {
                return(
                  <div key={index} className="single-track-container">
                    <div className="trackNumber">{index}</div>
                     <button 
                     type="button" 
                     className="single-title-button"
                     value={song.name} 
                     onClick={handleSingleChoice}>{song.name}</button>
                  </div>
                )                
              })}
            </div>
          </> 
        }
      </div>
    );
  }