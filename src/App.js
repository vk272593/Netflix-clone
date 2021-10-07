import React from "react";
import "./App.css";
import requests from "./components/request";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
//API key-657c0310468a12319dd598a9ffef1e23
function App() {
  return (
    <div className="app">
      <Nav/>
      {/* nav */}
      {/* banner */}
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Popular Movie" fetchUrl={requests.fetchPopularMovies} />
      <Row title="Top Rated Movie" fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Latest Movie" fetchUrl={requests.fetchlatestMovies}/> */}
      <Row title="Upcoming Movie" fetchUrl={requests.fetchUpcomingMovies} />
      <Row title="Popular TV Show" fetchUrl={requests.fetchpopularTv} />
      <Row title="Top Rated TV Show" fetchUrl={requests.fetchTopRatedTv} />
    </div>
  );
}

export default App;
