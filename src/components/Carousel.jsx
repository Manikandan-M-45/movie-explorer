import Slider from "react-slick";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";
import carousel5 from "../assets/carousel5.png";

const Carousel = () => {
  var settings = {
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={carousel1} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={carousel2} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={carousel3} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={carousel4} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={carousel5} alt="" className="img-fluid" />
      </div>
     {/* <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div> 
        <h3>6</h3>
      </div> */}
    </Slider>
  );
};

export default Carousel;
