
import { Album } from "./components/album/Album.jsx";
// import { Singles } from "./components/album/Singles.jsx";
import { AudioPlayer } from "./components/album/AudioPlayer.jsx";

const App = (album) => {
  return (
    <div className="App">
      <Album />
      {/* <Singles /> */}
      <AudioPlayer />

    </div>
  );
}

export default App;
