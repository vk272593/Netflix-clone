import React, { useEffect, useState } from "react";
import axios from "./axios";
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl ,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("")
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
 const opts ={
   height:'400',
   width:'100%',
   playerVars:{
     autoplay:1,
   }
 }
 const handleClick=(movie)=>{
if(trailerUrl){
  setTrailerUrl('')
}else{
  movieTrailer(movie?.name || "")
  .then((url)=>{
     const urlParams=new URLSearchParams(new URL(url).search);
     setTrailerUrl(urlParams.get('t'))
  })
  .catch((error)=>console.log(error))
}
 }
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row-posters">
        {/* movie poster-poster */}
        {movies.map((movie) => (
          <img
          key={movie.id}
          onClick={()=>handleClick(movie)}
            className={ `row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
