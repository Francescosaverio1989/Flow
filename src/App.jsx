import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";  // requires a loader 
import EspaceFlow from "./components/espaceflow/EspaceFlow";
import Home from "./components/home/Home";
import { Album } from "./components/album/Album.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Espace from "./components/espace/Espace";
import Home from "./components/home/Home"
import ResultsAlbums from './components/resultsalbums/ResultsAlbums.jsx';
import "./App.css";
import Lyrics from "./lyrics/Lyrics";

const App = () => {
  return (
    
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/espaceflow" element={<EspaceFlow />} />
          <Route path="/Album" element={<Album />} />
          <Route exact path="/Lyrics" element={<Lyrics />} />
          <Route path="/Espace" element={<Espace />} />
          <Route path="/album/:artist/:album" element={<ResultsAlbums />}/>
        </Routes>
      </Router>
    </>

  );
};

export default App;
