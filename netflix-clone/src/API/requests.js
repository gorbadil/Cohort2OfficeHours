const requests = {
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_networks=213`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=99`,
};

export default requests;
