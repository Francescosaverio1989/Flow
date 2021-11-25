
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Album.css';
import { Singles } from "./Singles.jsx";

export const Album = () => {
  const [album, setAlbum] = useState();
  //   const { albumName, artistName } = useParams();
  const artistName = "Cher";
  const albumName = "Believe";

  useEffect(() => {
    const getData = () => {
      axios
        .get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artistName}&album=${albumName}&format=json`)
        .then(data =>
        data.data.album && setAlbum(data.data.album))
      }
        albumName && artistName ? getData() : console.log(`albumName et artistName ne sont pas définis`);
    }, [albumName, artistName]);

    console.log("album");
    console.log(album);

    return (
      <div>
        { album &&
          <>
            <div className="albumsection-container">
                           
              <img src={album.image[3]["#text"]} alt={album.image['#text']} />

              <div className="albumsection-col2">
                <h2>{album.name}</h2>
                <h3>{album.artist}</h3>
                {/* <p>wiki : {album.wiki.key=(content)}</p> */}
                {/* released */}
              </div>
              
            </div>  



            <div>
              {album.tracks.track.map(song => {
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