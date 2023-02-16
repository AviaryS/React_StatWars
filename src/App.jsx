import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import FilmPage from "./pages/FilmPage/FilmPage";
import HomePage from "./pages/HomePage/HomePage";
import PlanetPage from "./pages/PlanetPage/PlanetPage";
import PlanetsPage from "./pages/PlanetsPage/PlanetsPage";
import HeroPage from "./pages/HeroPage/HeroPage";
import HeroesPage from "./pages/HeroesPage/HeroesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__inner">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/heroes" element={<HeroesPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/planet/:id" element={<PlanetPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
