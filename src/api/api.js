// import { useParams } from "react-router-dom";
// let { id } = useParams();

let id;

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "33cc2ec1ff1459c18c1c16f228bfbc17",
  // page: (page) => page,
  originalImg: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Img: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
  pageSelect: (page) => Math.floor(Math.random() * page) + 1,
};

const reqType = {
  reqPopular: `movie/popular?api_key=${
    apiConfig.apiKey
  }&language=en-US&page=${apiConfig.pageSelect(10)}`,
  reqNowPlaying: `movie/now_playing?api_key=${
    apiConfig.apiKey
  }&language=en-US&page=${apiConfig.pageSelect(10)}`,
  reqTopRated: `movie/top_rated?api_key=${
    apiConfig.apiKey
  }&language=en-US&page=${apiConfig.pageSelect(10)}`,
  reqUpcoming: `movie/upcoming?api_key=${
    apiConfig.apiKey
  }&language=en-US&page=${apiConfig.pageSelect(10)}`,
  reqTvPopular: `tv/popular?api_key=${
    apiConfig.apiKey
  }&language=en-US&page=${apiConfig.pageSelect(10)}`,
  reqTvTopRated: `tv/top_rated?api_key=${
    apiConfig.apiKey
  }&language=en-US&page=${apiConfig.pageSelect(10)}`,
  reqTvOnAir: `tv/on_the_air?api_key=${
    apiConfig.apiKey
  }&language=en-US&page=${apiConfig.pageSelect(10)}`,

  tvMoreInfo: `tv/${id}?api_key=${apiConfig.apiKey}&language=en-US`,
  movieMoreInfo: `movie/${id}?api_key=${apiConfig.apiKey}&language=en-US`,
};

export { apiConfig, reqType };
