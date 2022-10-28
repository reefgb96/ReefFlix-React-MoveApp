import React from "react";
import Sliders from "../components/UI/main/movies/sliders";
import { reqType } from "../api/api";
import Showcase from "../components/UI/main/showcase/showcase";

const TvShowsPage = () => {
  return (
    <div>
      <Showcase content={reqType.reqTvPopular} />
      <Sliders title="Popular" fetchUrl={reqType.reqTvPopular} />
      <Sliders title="Top Rated" fetchUrl={reqType.reqTvTopRated} />
      <Sliders title="On Air" fetchUrl={reqType.reqTvOnAir} />
    </div>
  );
};

export default TvShowsPage;
