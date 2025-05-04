import { useState } from "react";

export const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (value) => {
    setSearchTerm(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    if (!searchTerm) {
      setMovies([]);
      setSearchTerm("");
      return;
    }
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=4fb4bf47&s=${searchTerm}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setSearchTerm("");
      setMovies(json.Search);
      console.log(json);
    } catch (error) {
      setMovies([]);
      setSearchTerm("");
      console.error(error);
    }
  }

  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <h1 style={{ margin: "0 0 1rem 0", textAlign: "center" }}>
          Search Your Favorite Movies
        </h1>
        <div className="search-movies" style={{ width: "100%" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#444",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            action=""
            onSubmit={(event) => handleFormSubmit(event)}
          >
            <input
              style={{
                width: "90%",
                maxWidth: "20rem",
                height: "2.5rem",
                borderRadius: "5px",
                padding: "0 1rem",
                border: "1px solid #ccc",
                outline: "none",
              }}
              onChange={(e) => handleInputChange(e.target.value)}
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
            />
            <button
              style={{
                width: "90%",
                maxWidth: "20rem",
                height: "2.5rem",
                padding: "0 1rem",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => fetchData(searchTerm)}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        style={{
          marginTop: "10px",
          padding: "0 1rem",
        }}
        className="card-container container"
      >
        <ul
          className="row card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            padding: 0,
          }}
        >
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <li
                style={{
                  listStyle: "none",
                  display:"flex",
                  flex:"wrap",
                  height: "28rem",
                  width: "16rem",

                }}
                className="col-md-3"
                key={movie.imdbID}
              >
                <div
                  className="card mb-4 shadow-sm"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height:"100%",
                    overflow:"hideen"
                   
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "inherit",
                      maxHeight: "18rem",
                      objectFit: "contain",
                    }}
                    src={movie.Poster}
                    alt="."
                    onError={(e) =>
                      (e.target.src =
                        "https://icons.veryicon.com/png/o/education-technology/alibaba-cloud-iot-business-department/image-load-failed.png")
                    }
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <h5>{movie.Title}</h5>
                    <p>{movie.Year}</p>
                    <a
                      style={{
                        fontStyle: "none",
                        textDecoration: "none",
                        color: "brown",
                      }}
                      target="_blank"
                      href={`https://m.imdb.com/title/${movie.imdbID}`}
                    >
                      See The IMDB Page Here
                    </a>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </ul>
      </div>
    </>
  );
};
