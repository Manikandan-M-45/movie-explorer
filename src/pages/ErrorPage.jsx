import { Link } from "react-router-dom";
import pageNotFound from "../assets/pageNotFound.png";
const ErrorPage = () => {
  return (
    <div className="container-fluid errorpage text-center">
      <img
        src={pageNotFound}
        alt="pageNot Found"
        className="img-fluid errorimg"
      />
      <Link to={"/"} className="btn btn-outline-warning mt-2">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
