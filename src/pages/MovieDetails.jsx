import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoImage from "../assets/noimg.png";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(url);
      setMovie(res.data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    document.title = `${movie.title}`;
  });
  console.log(movie);

  const movieImg = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : NoImage;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div style={{ position: "relative", paddingBottom: "20px" }} className="my-5">
      <img
        src={backdropUrl}
        alt={movie.title}
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: "50%",
        }}
      />
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="container text-white"
      >
        <div className="row p-5">
          <div className="col-lg-3 col-sm-12 col-md-3">
            <img
              src={movieImg}
              alt=""
              className="img-fluid card-img card-thumbnail"
            />
          </div>
          <div className="col">
            <h2>{movie.title}</h2>
            <p>📌{movie.release_date}</p>
            <p>
              🎬{Math.floor(movie.runtime / 60)} hr {movie.runtime % 60} mins |
              ⭐{movie.vote_average}
            </p>
            <p>{movie.overview}</p>
            {movie.genres &&
              movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-danger m-2">
                  {genre.name}
                </span>
              ))}
            <div className="my-lg-5 my-3">
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                className="btn btn-outline-warning"
                target="_blank"
              >
                View in IMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
