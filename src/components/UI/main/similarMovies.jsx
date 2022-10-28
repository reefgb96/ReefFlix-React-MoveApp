import React from "react";
import { apiConfig } from "../../../api/api";
import { useState, useEffect } from "react";
import axios from "axios";
import Sliders from "./movies/sliders";
import { useParams } from "react-router-dom";

const SimilarList = () => {
  let [similarList, setSimilarList] = useState(null);
  let { id, type } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(
  //       apiConfig.baseUrl +
  //         `movie/${id}/similar?api_key=${apiConfig.apiKey}&language=en-US`
  //     )
  //     .then((res) => {
  //       similarList = res.data.cast;
  //       setSimilarList(similarList);
  //       console.log("response", res.data);
  //       console.log("similarList", similarList);
  //     })
  //     .catch((err) => console.log("err ", err));
  // }, [similarList]);

  return (
    <div className="container">
      <Sliders
        title={"More Like This"}
        fetchUrl={`${type}/${id}/similar?api_key=${apiConfig.apiKey}&language=en-US`}
      />
    </div>
  );
};

export default SimilarList;
