
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultsAlbums from './components/results-albums/ResultsAlbums.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // requires a loader 
import Espace from "./components/espace/Espace";

import "./App.css";

const App = () => {
  return (
    
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Espace" element={<Espace />} />
          <Route path="/Albums" element={<ResultsAlbums />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
