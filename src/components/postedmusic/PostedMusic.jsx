import React from 'react'
import './PostedMusic.css'
import VoteButton from '../votebutton/VoteButton'

const PostedMusic = ({musicTitle, artiste}) => {
    return (
        <div className="posted-music">
            <div>
                <h4>{musicTitle}</h4>
                <p className="posted-music-content">{artiste}</p>   
            </div>            
            <VoteButton />
        </div>
    )
}

export default PostedMusic
