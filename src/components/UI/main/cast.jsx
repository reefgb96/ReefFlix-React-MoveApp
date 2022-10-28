import React from "react";
import axios from "axios";
import { apiConfig } from "../../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import "../../../pages/style/CastList.css";

const CastList = (props) => {
  let [castInfo, setCastInfo] = useState(null);
  let { id, type } = useParams();

  useEffect(() => {
    axios
      .get(
        apiConfig.baseUrl +
          `${type}/${id}/credits?api_key=${apiConfig.apiKey}&language=en-US`
      )
      .then((res) => {
        castInfo = res.data.cast;
        setCastInfo(castInfo);
        // console.log("castInfo", castInfo);
      })
      .catch((err) => console.log("err ", err));
  }, [castInfo]);

  return (
    <>
      <h2>Cast:</h2>
      <div className="container d-flex justify-content-center">
        {castInfo
          ? castInfo.slice(0, 5).map((item, idx) => (
              <div className="card bg-transparent" key={"cast-img-" + idx}>
                <img
                  src={apiConfig.w500Img(item.profile_path)}
                  className="card-img-top"
                  alt={item.name}
                  key={"cast-img-" + item.id}
                />
                <div className="card-body">
                  <h5 className="card-title text-white">{item.name}</h5>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default CastList;
