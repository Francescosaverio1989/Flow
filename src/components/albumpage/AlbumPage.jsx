import React, {useState} from 'react'
import EspaceFlow from '../espaceflow/EspaceFlow'
import { Album } from '../album/Album'
import './AlbumPage.css'
import Lyrics from '../lyrics/Lyrics'
import Footer from '../footer/Footer'
import { useParams } from "react-router-dom";
import ResultsAlbums from '../resultsalbums/ResultsAlbums'

const AlbumPage = () => {
    const params = useParams();

    const artist = params.artist;
    const album = params.album;

    const [chosenSingle, setChosenSingle] = useState('');
    const [chosenArtist, setChosenArtist] = useState('');

    const handleSingleChoice = (e) => {
        setChosenSingle(e.target.value);
    }

    return (
        <div>
            <ResultsAlbums artist={artist} album={album}/>
            <Album artist={artist} album={album} setChosenSingle={setChosenSingle} setChosenArtist={setChosenArtist} handleSingleChoice={handleSingleChoice}/>
            <Lyrics chosenSingle={chosenSingle} chosenArtist={chosenArtist}/>
            <EspaceFlow />
            <Footer />
        </div>
    )
}

export default AlbumPage
