import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Mainnav";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Movie from "./Pages/Movies/Movie";
import Search from "./Pages/Search/Search";
import Trending from "./Pages/Trending/Trending";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
