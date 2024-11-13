import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "@/public/images/img1.svg";
import Img2 from "@/public/images/img2.svg";
import Img3 from "@/public/images/img3.svg";
import Img4 from "@/public/images/img4.svg";

const images = [Img1, Img2, Img3, Img4];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
    centerMode: true,
    centerPadding: "10px",
  };

  return (
    <div className="w-full max-w-full mx-auto my-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center ">
            <Image
              src={image}
              width={200}
              height={300}
              alt={`hero image ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
