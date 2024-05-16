import requests from "../API/requests"

export const rows = [
    {
      title: "NETFLIX ORIGINALS",
      fetchURL: requests.fetchNetflixOriginals,
      id: "ORIGINALS",
    },
    {
      title: "Trending Now",
      fetchURL: requests.fetchTrending,
      id: "TN",
    },
    {
      title: "Top Rated",
      fetchURL: requests.fetchTopRated,
      id: "TR",
    },
    {
      title: "Action Movies",
      fetchURL: requests.fetchActionMovies,
      id: "AM",
    },
    {
      title: "Comedy Movies",
      fetchURL: requests.fetchComedyMovies,
      id: "CM",
    },
    {
      title: "Horror Movies",
      fetchURL: requests.fetchHorrorMovies,
      id: "HM",
    },
    {
      title: "Romance Movies",
      fetchURL: requests.fetchRomanceMovies,
      id: "RM",
    },
    {
      title: "Documentaries",
      fetchURL: requests.fetchDocumentaries,
      id: "DM",
    }
  ]
