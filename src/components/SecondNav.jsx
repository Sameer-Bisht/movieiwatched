export const SecondNav = ()=>{
    return <>
        <nav style={{
            display:'flex',justifyContent:'center',alignItems:'center'
        }} className="navbar navbar-expand-lg bg-body-tertiary">
  <div style={{
    width:'500px',margin:'auto'
  }} className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Best Movies Watched of 2025</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  target="_blank" href="https://github.com/Sameer-Bisht/movieiwatched">Source Code : Github </a>
          
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>

}