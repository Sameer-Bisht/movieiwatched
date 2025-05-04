import { useState, useEffect } from "react";

export const Movies = ({ data }) => {
  const numberOfMovies = data.length;
  const [posters, setPosters] = useState({});

  // Fetch poster URLs when component mounts or data changes
  useEffect(() => {
    async function fetchData(name, year) {
      const url = `https://www.omdbapi.com/?i=tt3896198&apikey=4fb4bf47&s=${encodeURIComponent(name)}&y=${year}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        if (json.Response === "True" && json.Search?.[0]?.Poster) {
          return json.Search[0].Poster;
        } else {
          console.log(`No poster found for ${name} (${year})`);
          return null; // Fallback to null if no poster
        }
      } catch (error) {
        console.error(`Error fetching poster for ${name}:`, error);
        return null;
      }
    }

    // Fetch posters for all movies
    const fetchAllPosters = async () => {
      const posterMap = {};
      for (const movie of data) {
        const poster = await fetchData(movie.name, movie.year);
        posterMap[movie.id] = poster || movie.img_url; // Fallback to img_url if API fails
      }
      setPosters(posterMap);
    };

    fetchAllPosters();
  }, [data]);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <h3
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Movies / Series - Watched This Year
        </h3>
        <span
          style={{
            margin: "0 20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#00ffd9",
          }}
        >
          {numberOfMovies} - Watched
        </span>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="list-group list-group-horizontal"
      >
        {data.map((currMovie) => (
          <li
            key={currMovie.id}
            style={{
              maxHeight: "43rem",
              width: "15em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="card m-2"
          >
            <div className="card-body">
              <img
                style={{ width: "14em", height: "20em" }}
                src={posters[currMovie.id] || currMovie.img_url} // Use fetched poster or fallback
                className="card-img-top"
                alt={currMovie.name}
              />
              <h5 className="card-title">{currMovie.name}</h5>
              <p className="card-text">{currMovie.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Rating: {currMovie.rating}/10</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};