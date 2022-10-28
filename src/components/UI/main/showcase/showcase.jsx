import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig, reqType } from "../../../../api/api";
import "./style/showcase.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Showcase = ({ type }) => {
  let [movies, setMovies] = useState([]);
  let [movie, setMovie] = useState([]);
  let { id } = useParams();

  const movieHeaderReq = () => {
    axios
      .get(apiConfig.baseUrl + `${type}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) =>
        console.log("err ", err.response.data.status_message, err)
      );
  };

  useEffect(() => {
    movieHeaderReq();
  }, []);

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  // useEffect(() => {
  //   console.log(movie);
  // }, [movie]);

  if (movie) {
    return (
      <div className="showcase-div ">
        <div className="content-wrapper ">
          <img
            src={apiConfig.originalImg(
              !movie?.poster_path ? movie.poster_path : movie?.backdrop_path
            )}
            alt={movie?.title}
            className="showcase-img"
          />
          <div className="overlay w-100 px-4 d-flex flex-column justify-content-center align-items-between position-absolute top-50 start-50 translate-middle">
            <div className="movie-title">
              <h1 className="text-white mx-2">
                {movie?.original_name ? movie?.original_name : movie.title}
              </h1>
            </div>
            <div className="showcase-overview w-50 fw-bold">
              <span>{movie?.overview}</span>
            </div>
            <div className="showcase-btns my-5 w-50">
              <button className="showcase-btn-child border text-black border-white py-2 px-5 mx-2 fw-bold">
                ▶ Play
              </button>
              <button className="showcase-btn-child border bg-transparent text-white fw-bold border-white py-2 px-5 mx-2">
                Watch Later
              </button>
              {movie.id ? (
                <Link
                  to={`/info/${movie.id}`}
                  className="showcase-btn-child border w-25 bg-transparent text-white fw-bold border-white py-2 px-5 mx-2"
                >
                  More info
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Showcase;
