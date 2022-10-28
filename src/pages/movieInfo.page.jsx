import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "../api/api";
import { Link, useParams, useHistory } from "react-router-dom";
import "./style/movieInfo.css";
import Cast from "../components/UI/main/cast";
import SimilarList from "../components/UI/main/similarMovies";
import CastList from "../components/UI/main/cast";

// fix Tv show info page "tv/${id}?api_key=${apiConfig.apiKey}&language=en-US"

const MovieInfoPage = () => {
  let [movieInfo, setMovieInfo] = useState(null);
  let { id, type } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(
        apiConfig.baseUrl +
          `${type}/${id}?api_key=${apiConfig.apiKey}&language=en-US`
      )
      // fix Tv show info page 👆
      .then((res) => {
        setMovieInfo(res.data);
        // console.log(res);
      })
      .catch((err) => console.log("err ", err));
  }, [id]);

  return (
    <>
      {movieInfo && (
        <>
          <Link
            onClick={() => {
              history.push("/");
            }}
            className="back fs-5 text-white position-absolute"
          >
            ⬅ Go back
          </Link>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImg(
                movieInfo.backdrop_path || movieInfo.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container d-flex justify-content-center">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImg(
                    movieInfo.poster_path || movieInfo.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{movieInfo.title || movieInfo.name}</h1>
              <div className="genres">
                {movieInfo.genres &&
                  movieInfo.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item bg-opacity-25">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{movieInfo.overview}</p>
              <div className="cast">
                <CastList id={id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              {/* <VideoList id={movieInfo.id} /> */}
            </div>
            <div className="section mb-3">
              <SimilarList id={id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieInfoPage;
