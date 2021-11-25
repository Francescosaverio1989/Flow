import Header from './components/header/Header';
import ResultsAlbums from './components/results-albums/ResultsAlbums.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // requires a loader 

function App() {
  return (
    <div>
      <Header name="FLOW" />
      <ResultsAlbums />
    </div>
  );
}

export default App;
