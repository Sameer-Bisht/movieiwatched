   import { Movies } from "./components/movies";
   import { Navbar } from "./components/Navbar";
import { SecondNav } from "./components/SecondNav";
   const App = ()=>{
  return (
    
    <>
      <Navbar/>
      <SecondNav/>
    <div style={{
      display:'flex',
      flexWrap:'wrap',

    }} className="container ">
      
    <Movies/>

    </div>
    </>
  )
}

export default App;