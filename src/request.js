const API_KEY = "657c0310468a12319dd598a9ffef1e23";
const requests = {
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,

  fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}`,
  fetchpopularTv: `/tv/popular?api_key=${API_KEY}`,
};
export default requests;
