import "./App.css";
import Navbar from "./components/UI/header/navbar/navbar";
// import Sliders from "./components/UI/main/movies/sliders";
// import { apiConfig, reqType } from "./api/api";
// import Showcase from "./components/UI/main/showcase/showcase";
import MovieInfoPage from "./pages/movieInfo.page";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TvShowsPage from "./pages/TvShowsPage";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/series" component={TvShowsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/info/:type/:id" component={MovieInfoPage} />
      </Switch>
    </div>
  );
}

export default App;
