import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Movies} from "./components/movies.jsx";
import {SearchMovies} from "./components/SearchMovies"; 
import {Navbar} from "./components/Navbar";
import {SecondNav} from "./components/SecondNav";
import  sauravData from "./api/SauravData.json";
import sameerData from "./api/MovieWatchlist.json";
import Lander from "./components/Lander";
const App = () => {
  return (
    <Router basename="/">
      <Routes>
      <Route path="/" element={
          <> 
            <Navbar />
            <SecondNav />
            <Lander/>
          </>
        }/>
        <Route path="/bisht" element={
          <> 
            <Navbar />
            <SecondNav />
            <Movies data = {sameerData} />
          </>
        }/>
        <Route path="/tamta" element={
          <> 
            <Navbar />
            <SecondNav />
            <Movies data = {sauravData} />
          </>
        }/>
        <Route path="/searchmovies" element={
          <>
            <SecondNav />
            <SearchMovies />
          </>
        }/>
      </Routes>
    </Router>
  );
};

export default App;
