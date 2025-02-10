import { Route, Routes } from "react-router-dom";
import MoviesList from "../pages/MoviesList";
import MovieDetails from "../pages/MovieDetails";
import SearchMovie from "../pages/SearchMovie";
import ErrorPage from "../pages/ErrorPage";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesList title="Movies for you" api_path="movie/now_playing" />} />
        <Route path="/movies/popular" element={<MoviesList title="Movies on popular" api_path="movie/popular" />} />
        <Route path="/movies/top-rated" element={<MoviesList title="Top rated movies" api_path="movie/top_rated" />} />
        <Route path="/movies/upcoming" element={<MoviesList title="Upcoming movies" api_path="movie/upcoming" />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="search" element={<SearchMovie api_path="search/movie" />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
