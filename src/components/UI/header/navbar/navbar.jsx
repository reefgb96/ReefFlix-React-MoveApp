import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "../navbar/style/navbar.css";
import TvShowPage from "../../../../pages/TvShowsPage";

const Navbar = () => {
  // const linkStyle = {
  //   listStyleType: "none",
  //   listStyle: "none",
  //   textDecoration: "none",
  //   cursor: "pointer",
  //   color: "#fff",
  //   borderBottom: "2px solid transparent",
  //   transition: "0.3s ease-in-out",
  //   hover: "border-bottom: 2px solid red",
  // };
  // const logoStyle = {
  //   textDecoration: "none",
  //   color: "#e50914",
  //   fontSize: "",
  //   cursor: "pointer",
  // };

  return (
    <nav className="nav nav-bar navigation-bar sticky-top container-fluid border-bottom border-secondary d-flex justify-content-between align-items-center px-4 pt-2">
      <div className="site-title w-25 ">
        <NavLink to="/" className="navbar-logo">
          ReefFlix
        </NavLink>
      </div>
      <div className="search-box w-25">
        <input type="search" className="search-input w-100" />
      </div>
      <div className="links w-25">
        <ul className="nav-links d-flex flex-wrap justify-content-between align-items-center my-2 ">
          <NavLink
            to="/series"
            // component={TvShowPage}
            className="navbar-item"
            key={"1"}
          >
            TV Shows
          </NavLink>
          <NavLink to="/movies" className="navbar-item" key={"2"}>
            Movies
          </NavLink>
          <NavLink to="/Login" className="navbar-item" key={"3"}>
            Log in
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
