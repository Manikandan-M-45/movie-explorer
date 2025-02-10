import { Link } from "react-router-dom";
import NoImage from "../assets/noimg.png";

const Card = ({movie}) => {

  const {poster_path,title, vote_average,vote_count,overview} = movie;

  const img = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : NoImage;
  return (
    <div className="col my-4">
      <div className="card shadow-sm" title={title}>
        <div className="img-thumbnail bg-dark">
          <img src={img} alt="movie poster" className="card-img object-fit-contain "  style={{height:'300px'}}/>
        </div>
        <div className="card-body">
          <h4 className="text-danger card-movietitle" >{title}</h4>
          <p className="card-para">
           {overview}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/movie/${movie.id}`} className="btn btn-sm btn-outline-primary stretched-link">Read more</Link>

            <small>
            ⭐{vote_average} | {vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
