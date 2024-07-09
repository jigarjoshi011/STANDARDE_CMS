import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = ({ children, direction = 'horizontal', settings = {} }: {children:React.ReactNode, direction:string,settings:Settings}) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...(direction === 'vertical' && {
      vertical: true,
      verticalSwiping: true,
    }),
    ...settings,
  };

  return (
    <Slider {...defaultSettings}>
      {children}
    </Slider>
  );
};

export default CarouselComponent;