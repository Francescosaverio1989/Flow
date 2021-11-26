
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Album.css';
import logo from '../../assets/images/logo-flow.png'

export const Album = ({artist, album, setChosenSingle, handleSingleChoice}) => {

  const [chosenAlbum, setChosenAlbum] = useState();

  console.log("L'artiste en cours est :")
  console.log(artist);
  console.log("L'album en cours est :")
  console.log(album);


  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artist}&album=${album}&format=json`)
        .then(data =>
        data.data.album && setChosenAlbum(data.data.album))
      }
        album && artist ? getData() : console.log(`albumName et artistName ne sont pas définis`);
    }, [album, artist]);

    console.log("chosen album");
    console.log(chosenAlbum);

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

              </div>  
            </div>  

            <div className="single-tracks">
              {chosenAlbum.tracks.track.map((song, index) => {
                return(
                  <div key={index} className="single-track-container">
                    <div className="trackNumber">{index}</div>
                     <button 
                     type="button" 
                     className="single-title-button"
                     value={song.name} 
                     onClick={handleSingleChoice}>{song.name}, {song.duration}</button>
                  </div>
                )                
              })}
            </div>
          </> 
        }
      </div>
    );
  }