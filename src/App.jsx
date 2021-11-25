import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";  // requires a loader 
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
          <Route exact path="/Lyrics" element={<Lyrics />} />
          <Route path="/Espace" element={<Espace />} />
          <Route path="/album/:artist/:album" element={<ResultsAlbums />}/>
        </Routes>
      </Router>
    </>

  );
};

export default App;
