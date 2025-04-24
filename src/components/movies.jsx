import watchList from "../api/MovieWatchlist.json";
export const Movies = () => {
  return (
    <>
    <div className="container"><h3 style={{color:"white",display:"flex", justifyContent:'center'}}>Movies / Series -  Watched This Year</h3></div>
    <ul style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}} className="list-group list-group-horizontal">

      {watchList.map((currMovie) => {
        return (
         
          

              <li key={currMovie.id}  style={{height:"auto",width:'15em', display:'flex',justifyContent:'center',alignItems:'center'}} className=" card m-2" >
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
