import { useEffect } from "react";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SearchMovie = ({ api_path }) => {
  const [searchParameter] = useSearchParams();
  const queryString = searchParameter.get("movie");

  useEffect(() => {
    document.title = `search results for ${queryString}`;
  });
  const { data: movies } = useFetch(api_path, queryString);
  return (
   <div className="container">
  <h3 className="text-danger my-3 text-center parent"><span className="search">{movies.length == 0 ? 'Movie Not Found': `Results for ${queryString}`}</span></h3>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {Array.isArray(movies) &&
        movies.map((movie) => <Card key={movie.id} movie={movie} />)}
    </div>
    </div>
  );
};

export default SearchMovie;
