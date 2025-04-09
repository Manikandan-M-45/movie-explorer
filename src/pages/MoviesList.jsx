import { useEffect } from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import Faq from "../components/Faq";

const MoviesList = ({ title, api_path }) => {
  const { data: movies } = useFetch(api_path);

  useEffect(() => {
    document.title = title;
  });
  return (
    <div className="my-3">
      {title === "Movies for you" ? <Carousel /> : ""}
      <div className="container">
        <h2 className="text-danger mt-5 pt-5">{title}</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {Array.isArray(movies) &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>

      {title === "Movies for you" ? <Faq /> : ""}
    </div>
  );
};

export default MoviesList;