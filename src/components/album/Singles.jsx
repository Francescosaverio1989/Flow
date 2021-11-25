import React, { Component } from "react";

export const Singles = (props) => {

  const { album } = props; 

    console.log("singles");
    console.log(album);

    return (
      <div>
              {album.tracks.track.map(song => {
                return(
                  <>
                  <div>{song.name}, {song.duration}</div>
                  </>
                )
                
              })}
      </div>
    );
  }