import Lyrics from "./Lyrics"

export const DisplayLyrics = ({lyrics}) => {
    console.log(lyrics)
    return (
        <div>
            <h1> Title song </h1>
             <p>{lyrics.lyrics}</p>
        </div>
    )
}