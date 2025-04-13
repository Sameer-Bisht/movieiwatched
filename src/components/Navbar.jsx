import moviesList from "../api/MovieWatchlist.json";

export const Navbar = () => {
  const numberOfMovies = moviesList.length;

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "100%",
            justifyContent: "center",
            fontWeight: "bolder",
          }}
          className="container-fluid"
        >
          <a className="navbar-brand" href="#">
            My Movie Watchlist 2025
          </a>
        </div>
      </nav>

      <nav className="navbar bg-body-tertiary">
          <a className="navbar-brand" href="https://github.com/Sameer-Bisht/movieiwatched">
           source code
          </a>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{numberOfMovies} Movies Watched</span>
        </div>
      </nav>
    </>
  );
};
