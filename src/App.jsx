import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";  // requires a loader 
import Home from "./components/home/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import AlbumPage from "./components/albumpage/AlbumPage";
import { Album } from "./components/album/Album";

const App = () => {
  return (
    
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/album/:artist/:album" element={<AlbumPage />}/>
        </Routes>
      </Router>
    </>

  );
};

export default App;
