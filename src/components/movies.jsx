import watchList from "../api/MovieWatchlist.json";
export const Movies = () => {
  return (
    <>
      {watchList.map((currMovie) => {
        return (
          <>
            <div  key={currMovie.id} style={{width:'15em', display:'flex',justifyContent:'center',alignItems:'center'}} className=" card m-2" >
              <img style={{width: '14em',height: '20em'}} src={currMovie.img_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{currMovie.name}</h5>
                <p className="card-text">
                  {currMovie.description}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating : {currMovie.rating}/10</li>
              </ul>
              
            </div>
          </>
        );
      })}
    </>
  );
};
