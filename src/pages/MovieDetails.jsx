import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoImage from "../assets/noimg.png";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [favMovie, setFavMovie] = useState([]);
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

  const handleFav = async() => {
    const res = await axios.post(`https://api.themoviedb.org/3/account/21666882/favorite?api_key=${key}`,{
      "media_type": "movie",
      "media_id": movie.id,
      "favorite": true
    },
    {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5OWEwNTg1NDM2YWI0MmQwM2Y1OTNlNGJjMzQ5OCIsIm5iZiI6MTczMzIwODI4My45Njk5OTk4LCJzdWIiOiI2NzRlYThkYjY3OWVjMTUzMjg4MjVlNjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wdPeqDLkU_7jk0XGGAtIC6B5cX8BIu25O5kL98KieLM'
      }
    }
  )

    setFavMovie(res.data);

    viewFavMovies();
  }
  console.log('favMovie: ', favMovie)

  const viewFavMovies = async() => {
    const res = await axios.get('https://api.themoviedb.org/3/account/21666882/favorite/movies?language=en-US&page=1&sort_by=created_at.asc',{
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5OWEwNTg1NDM2YWI0MmQwM2Y1OTNlNGJjMzQ5OCIsIm5iZiI6MTczMzIwODI4My45Njk5OTk4LCJzdWIiOiI2NzRlYThkYjY3OWVjMTUzMjg4MjVlNjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wdPeqDLkU_7jk0XGGAtIC6B5cX8BIu25O5kL98KieLM'
      }
    })

    console.log('viewFavMovies: ', res);
  }

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
            <div className="my-lg-5 my-3">
              <button
                
                className="btn btn-outline-warning"
                onClick={handleFav}
              >
                Add to Favourites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
