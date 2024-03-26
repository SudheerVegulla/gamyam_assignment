import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import './Carousel.css'; // You can add custom styles for arrows in this CSS file

const Carousel = ({ images }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Slider {...settings} ref={sliderRef}>
          {images && images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
        <button className="carousel-arrow prev" onClick={previousSlide}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="carousel-arrow next" onClick={nextSlide}>
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import './Card.css'; // You can add custom styles for the card in this CSS file

// const Card = ({images }) => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const previousSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="card">
//       <div className="carousel-wrapper">
//         <Slider {...settings} ref={sliderRef}>
//           {images.map((image, index) => (
//             <div key={index}>
//               <img src={image} alt={`Image ${index}`} />
//             </div>
//           ))}
//         </Slider>
//         <button className="carousel-arrow prev" onClick={previousSlide}>
//           Prev
//         </button>
//         <button className="carousel-arrow next" onClick={nextSlide}>
//           Next
//         </button>
//       </div>
//       <div className="card-content">
//         <h3 className="card-title">title</h3>
//         <p className="card-amount">amount</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
