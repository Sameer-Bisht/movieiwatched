

export const Movies = ({data}) => {
  const numberOfMovies = data.length;
  return (
    <>
    <div className="container" style={{display:'flex',flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}><h3 style={{color:"white",display:"flex", justifyContent:'center',}}>Movies / Series -  Watched This Year</h3> 
    <span style={{margin:"0 20px", fontSize:"1.5rem", fontWeight:"bold", color:"#00ffd9"}}>{numberOfMovies} - Watched</span></div>
    <ul style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}} className="list-group list-group-horizontal">

      {data.map((currMovie) => {
        return (
         
          

              <li key={currMovie.id}  style={{maxHeight:"43rem",width:'15em', display:'flex',justifyContent:'center',alignItems:'center'}} className=" card m-2" >
              <div className="card-body">
              <img style={{width: '14em',height: '20em'}} src={currMovie.img_url} className="card-img-top" alt="..." />
                <h5 className="card-title">{currMovie.name}</h5>
                <p className="card-text">
                  {currMovie.description}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating : {currMovie.rating}/10</li>
              </ul>
              
            </li>
          
        );
      })}
      </ul>
    </>
  );
};
