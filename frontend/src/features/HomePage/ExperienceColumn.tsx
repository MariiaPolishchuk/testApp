import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../../styles/Carousel.css";

const ExperienceColumn2: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Slider {...settings}>
      <div className="experience-column">
        <div className="column-squares">
          <div className="first-square square">
            <h1 className="square-heading">Interactive Topics</h1>
            <p className="square-text">
              Carefully selected topics with automatic check
            </p>
          </div>
        </div>
      </div>
      
      <div className="experience-column">
        <div className="column-squares">
          <div className="second-square square">
            <h1 className="square-heading">Flexibility</h1>
            <p className="square-text">Ability to work on any device</p>
          </div>
        </div>
      </div>

      <div className="experience-column">
        <div className="column-squares">
          <div className="third-square square">
            <h1 className="square-heading">Qualification</h1>
            <p className="square-text">
              Content created by highly qualified experienced PhD English tutors
            </p>
          </div>
        </div>
      </div>

      <div className="experience-column">
        <div className="column-squares">
          <div className="fourth-square square">
            <h1 className="square-heading">Only interactive materials!</h1>
            <p className="square-text">
              Plenty of multitasking topics, interactive listening,
              video materials, and speaking practices
            </p>
          </div>
        </div>
      </div>

      <div className="experience-column">
        <div className="column-squares">
          <div className="fifth-square square">
            <h1 className="square-heading">Busy Teacher Helper</h1>
            <p className="square-text">
              Teachers can use materials during the lesson, making it brighter,
              sharing the screen, downloading materials for self-working
            </p>
          </div>
        </div>
      </div>

      <div className="experience-column">
        <div className="column-squares">
          <div className="sixth-square square">
            <h1 className="square-heading">Constant Support</h1>
            <p className="square-text">
              You can always write to us, sign up for trial lessons, and continue your
              journey in learning English with highly qualified tutors!
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ExperienceColumn2;
