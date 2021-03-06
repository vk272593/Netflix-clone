import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import './Banner.css';
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginal);
        
        
      setMovie( request.data.results[
          Math.floor(Math.random()*request.data.results.length)
      ]);
      return request
    }
    fetchData();
  },[]);
  console.log(movie);
  function truncate(str,n){
      return (str?.lenght>n ? str.sustr(0,n-1)+"...":str);
  }
  return (
      
      <header className="banner"
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center"

    }}
    >
    
        <div className="banner-content">

      {/* title */}
      <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}
      </h1>
      {/* div>2 button */}
      <div className="banner-buttons">
       <button className="banner-button">Play</button>
       <button className="banner-button">My List</button>
      </div>
      {/* description */}
      <h1 className="banner-description">{movie?.overview}
      {truncate(movie?.overview,150)}</h1>
        </div>
       
      
    </header>
  );
}

export default Banner;
