import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "../../../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style/slider.css";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Mousewheel } from "swiper";
import { Link, useParams } from "react-router-dom";

const Sliders = ({ title, fetchUrl }) => {
  let { type } = useParams();
  let [movies, setMovies] = useState([]);
  let keyNum = 0;

  const sendReq = () => {
    axios
      .get(apiConfig.baseUrl + fetchUrl)
      .then((res) => {
        setMovies(res.data.results);
        // console.log(movies);
      })
      .catch((err) => console.log("err ", err));
  };
  // console.log(movies);

  useEffect(() => {
    sendReq();
  }, [movies]);

  return (
    <>
      <h2
        className="p-4 mx-2 text-white"
        key={"key-title-" + keyNum === keyNum ? 1 : keyNum++}
      >
        {title}:
      </h2>
      <Swiper
        mousewheel={true}
        modules={[Mousewheel]}
        className="card-container d-flex p-4"
      >
        {movies != []
          ? movies.map((item, idx) => {
              let imgSrc = null;
              let imgSrc2 = null;
              let imgSrc3 = null;
              if (item.poster_path) {
                imgSrc = apiConfig.originalImg(item.poster_path);
              } else if (item.backdrop_path) {
                imgSrc2 = apiConfig.originalImg(item.backdrop_path);
              } else if (item.profile_path) {
                imgSrc3 = apiConfig.originalImg(item.profile_path);
              }

              return (
                <>
                  <SwiperSlide
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className={`mySwiper cards mx-3 w-25 ${
                      imgSrc === null && imgSrc2 === null ? "d-none" : ""
                    }`}
                    key={"key-div" + keyNum === keyNum ? 1 : keyNum++}
                  >
                    <Link
                      to={`/info/${
                        fetchUrl.includes("tv")
                          ? (type = "tv")
                          : (type = "movie")
                      }/${item.id}`}
                      className={`img-parent `}
                      key={"key-img" + item.id}
                    >
                      <img
                        key={"key-img-" + item.id}
                        id={idx}
                        src={imgSrc || imgSrc2 || imgSrc3 || "..."}
                        className={`card-img-top card-img `}
                        alt={item.original_title}
                      />
                    </Link>
                  </SwiperSlide>
                </>
              );
            })
          : null}
      </Swiper>
    </>
  );
};

export default Sliders;
