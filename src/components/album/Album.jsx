
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './Album.css';
import { Singles } from "./Singles.jsx";

export const Album = ({artist, album}) => {

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
        { chosenAlbum &&
          <>
            <div className="albumsection-container">
                           
              <img src={chosenAlbum.image[3]["#text"]} alt={chosenAlbum.image['#text']} />

              <div className="albumsection-col2">
                <h2>{chosenAlbum.name}</h2>
                <h3>{chosenAlbum.artist}</h3>
                {/* <p>wiki : {album.wiki.key=(content)}</p> */}
                {/* released */}
              </div>
              
            </div>  



            <div>
              {chosenAlbum.tracks.track.map(song => {
                return(
                  <>
                  <div>{song.name}, {song.duration}</div>
                  </>
                )                
              })}
            </div>
          </> 
        }
      </div>
    );
  }