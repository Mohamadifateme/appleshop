import React from 'react';
import'./slideShow.style.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

 

const SlideShow = () => {

  
      const images = [
      "/images/slider/1.jpg", 
      "/images/slider/2.jpg", 
      "/images/slider/3.jpg", 
      "/images/slider/4.jpg", 
      "/images/slider/5.jpg", 
      "/images/slider/6.jpg", 

    ];

    return (

        <Slide
            
    slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={true} 
    responsive={[{
    breakpoint: 800,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }, {
  breakpoint: 500,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}]}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                  
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                  
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                  
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                  
                </div>
            </div>
        </Slide>
    );
};

export { SlideShow};