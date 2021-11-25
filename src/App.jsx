import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Espace from "./components/espace/Espace";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Espace" element={<Espace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
