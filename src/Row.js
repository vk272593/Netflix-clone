import React, { useEffect, useState } from "react";
import axios from "./axios";
import './Row.css'
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl ,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  //A snippet of code based on specific condition
  useEffect(() => {
    // if [],run once when the row loads,and don't run again;
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      // console.log(requests.data.results);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row-posters">
        {/* movie poster-poster */}
        {movies.map((movie) => (
          <img
          key={movie.id}
            className={ `row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
