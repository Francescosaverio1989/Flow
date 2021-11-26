import axios from 'axios';
import React from 'react'

const SuggestionSong = (props) => {

    const [searchSong, setSearchSong] = useState("");

    const getArtistSong = async () => {
        axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=7f8f8f5d046ed8eb2174ac55fadb58ae&format=json")
            .then(response => console.log(response))



    const handleSearchTerm = (e) => {
        setSearchSong(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.onSubmit(searchSong)
    

    return (
        <div>
            <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" id="search-bar"placeholder="Search an other song..." onChange={handleSearchTerm} value={searchSong}/>
            </form>
        </div>
    )
}

export default SuggestionSong;
