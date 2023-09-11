import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { sliderData } from "./Slide.constant";

const Slider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div className="px-2 lg:px-0">
      <div className="container bg-blue-300 mx-auto lg:h-[700px] rounded-md overflow-hidden relative">
        <SlickSlider {...settings}>
          {sliderData.map((slide, i) => (
            <Slide key={i} slide={slide}></Slide>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default Slider;
