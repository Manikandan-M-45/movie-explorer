import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo-banner.png';

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedMovie = e.target.search.value;
    e.target.reset();
    navigate(`/search?movie=${searchedMovie}`)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink to={'/'} className="navbar-brand text-danger"><img src={logo} alt="logo" className="img-fluid" style={{height:'30px'}} /> Metflix</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item decoration">
                <NavLink className="nav-link active text" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item decoration">
                <NavLink className="nav-link text" to="/movies/top-rated">
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item decoration">
                <NavLink className="nav-link text" to="/movies/popular">
                  Popular
                </NavLink>
              </li>
              <li className="nav-item decoration">
                <NavLink className="nav-link text" to="/movies/upcoming">
                  Upcoming
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
