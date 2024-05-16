import { useEffect, useState, useRef } from "react";
import RowItem from "../RowItem/RowItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import "./Row.css";

function Row({ title, fetchURL, id }) {
  const [movies, setMovies] = useState([]);
  const moviesRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    console.log(movies);
  }, [fetchURL]);

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="slider">
        <div className="slider-arrow-left">
          <span
            className="arrow"
            onClick={() => {
              // document.getElementById(id).scrollLeft -= window.innerWidth - 80;
              moviesRef.current.scrollLeft -= window.innerWidth - 80;
            }}
          >
            <ArrowBackIosIcon />
          </span>
        </div>
        <div id={id} ref={moviesRef} className="row-posters">
          {movies?.map((movie) => (
            <RowItem key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="slider-arrow-right">
          <span
            className="arrow"
            onClick={() => {
              console.log(moviesRef)
              // document.getElementById(id).scrollLeft += window.innerWidth - 80;
              moviesRef.current.scrollLeft += window.innerWidth - 80;
            }}
          >
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Row;
