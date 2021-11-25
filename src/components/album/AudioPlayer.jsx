//import AudioPlayer from 'react-h5-audio-player';

export const AudioPlayer = () => {

  const Player = () => (
    <AudioPlayer
      autoPlay
      src="http://example.com/audio.mp3"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );

    return (
      <div>
          Player

      </div>
    );
  }