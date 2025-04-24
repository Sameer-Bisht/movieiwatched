import moviesList from "../api/MovieWatchlist.json";
export const SecondNav = ()=>{
  
  const numberOfMovies = moviesList.length;
    return <>
        <nav style={{
            display:'flex',justifyContent:'center',alignItems:'center'
        }} className="navbar navbar-expand-lg bg-body-tertiary">
  <div style={{
    width:'800px',margin:'auto',border:"2px solid black",borderRadius:'10px',padding:'10px',
  }} className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div style={{display:"flex",justifyContent:'center',alignItems:"center",}} className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/searchmovies">Search For Movies To Watch</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link"  target="_blank" >{numberOfMovies} movies watched </a>
          
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
    </>

}