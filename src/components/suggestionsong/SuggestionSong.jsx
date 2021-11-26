import axios from 'axios';
import React, {useState} from 'react'
import './SuggestionSong.css'

const SuggestionSong = (props) => {

    const [searchSong, setSearchSong] = useState("");

    const getArtistSong = async () => {
        axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=7f8f8f5d046ed8eb2174ac55fadb58ae&format=json")
            .then(response => console.log(response))
    }

    const handleSearchTerm = (e) => {
        
        console.log("song value")
        console.log(e.target.value)
        // setSearchSong(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.onSubmit(searchSong)
    }
    

    return (
        <div>
            <h4>Suggest another song</h4>
            <form className="search-bar" onSubmit={handleSubmit}>
                <label htmlFor="song">
                    <input type="text" id="song" placeholder="Search an other song..." onChange={handleSearchTerm} value={searchSong}/>
                </label>
                <div>
                    <p>{searchSong}</p>
                    <button type="submit" className="btn">
                        Post
                    </button>
                </div>
            </form>
        </div>
    )

}

export default SuggestionSong
