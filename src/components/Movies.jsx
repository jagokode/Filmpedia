import SearchIcon from "../search.svg";
import MovieCard from "./MovieCard";

const Movies = ({ movies, search, setSearch, searchMovies, loading }) => {
  return (
    <div className="app">
      <h1>Filmpedia</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Cari film"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {loading && <h1>Loading...</h1>}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movies not found</h2>
        </div>
      )}
    </div>
  );
};

export default Movies;
