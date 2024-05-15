import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../API/requests";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  const shorten = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovieIndex = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomMovieIndex]);
      console.log(movie);
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("${import.meta.env.VITE_IMG_BASE_URL}${
          movie?.backdrop_path
        }")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title"> {movie?.name} </h1>
        <div className="banner-buttons">
          <button className="banner-button play">
            <PlayArrowIcon /> Play
          </button>
          <button className="banner-button info">
            <InfoIcon /> More Information
          </button>
        </div>
        <p className="banner-desc"> {shorten(movie.overview, 100)} </p>
      </div>
    </div>
  );
}

export default Banner;
