import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "./components/Movies";

const api_key = process.env.REACT_APP_OMDB_API;
const initialSearch = "Spiderman";

const API_URL = `https://www.omdbapi.com?apikey=${api_key}`;

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchMovies(initialSearch);
  }, []);

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();
  //   console.log(data.Search);
  // };

  const searchMovies = async (title) => {
    setLoading(true);
    const response = await axios.get(`${API_URL}&s=${title}`);
    setMovies(response.data.Search);
    setLoading(false);
  };

  return (
    <>
      <Movies
        movies={movies}
        search={search}
        setSearch={setSearch}
        searchMovies={searchMovies}
        loading={loading}
      />
    </>
  );
}

export default App;
