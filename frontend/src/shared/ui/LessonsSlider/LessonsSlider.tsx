import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Button from "@mui/material/Button";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselItem {
  image: string;
  link: string;
}

interface MyCarouselProps {
  items: CarouselItem[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ items }) => {
  return (
    <div className="carousel-container">
      <div className='carousel-lessons'>
        <h3 className='theme-start'>Check our latest Lessons!</h3>
      </div>
      <Carousel className='carousel'
        autoPlay
        infiniteLoop
        interval={5000}
        transitionTime={2000}
        showThumbs={false}
      >
        {items.map((item, index) => (
          <div key={index}>
            <img className='image-container' src={item.image} alt={`Slide ${index}`} />
            <Button className='start-button'
              href={item.link}
              variant="contained"
              color="primary"
              style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
            >
              Start
            </Button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
