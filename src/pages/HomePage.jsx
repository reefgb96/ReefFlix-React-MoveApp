import React from "react";
import Sliders from "../components/UI/main/movies/sliders";
import { apiConfig, reqType } from "../api/api";
import Showcase from "../components/UI/main/showcase/showcase";

const HomePage = () => {
  return (
    <div>
      <Showcase type={reqType.reqPopular} />
      <Sliders
        title="Popular"
        fetchUrl={reqType.reqPopular}
        tvOrMovie={reqType.movieMoreInfo}
      />
      <Sliders
        title="Top Rated"
        fetchUrl={reqType.reqTopRated}
        tvOrMovie={reqType.movieMoreInfo}
      />

      <Sliders
        title="In Theaters"
        fetchUrl={reqType.reqNowPlaying}
        tvOrMovie={reqType.movieMoreInfo}
      />
    </div>
  );
};

export default HomePage;
