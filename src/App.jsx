   import { Movies } from "./components/movies";
   import { Navbar } from "./components/Navbar";
import { SearchMovies } from "./components/SearchMovies";
import { SecondNav } from "./components/SecondNav";
import { BrowserRouter  as Routes, Route } from "react-router-dom";

   const App = ()=>{
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={
          
          <>
            <Navbar />
            <SecondNav />
           <Movies/>
          </>
          }>
          
        </Route>
        <Route path="/searchmovies" element={
          <>
            <SecondNav />
           <SearchMovies/>
          </>
          }>
        
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;