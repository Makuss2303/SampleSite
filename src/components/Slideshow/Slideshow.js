import React, { Component } from 'react'
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import "./Slideshow.css";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      
      <div className='slideCustomize'>
        <Slider {...settings}>
          <div className='textPotition'>
            <img src={slide1} className='imgCustomize' alt='slide1'></img>
            <div className="textImgFirst">Sample Service</div>
            <div className="textImgSecond">Maecenas tincidunt, augue at  rutrum condimentum, libero <br/> lectus mattis orci, ut commodo</div>
          </div>
          <div className='textPotition'>
            <img src={slide2} className='imgCustomize' alt='slide2'/>
            <div className="textImgFirst">Sample Service</div>
            <div className="textImgSecond">Maecenas tincidunt, augue at  rutrum condimentum, libero <br/> lectus mattis orci, ut commodo</div>
          </div>
        </Slider>
      </div>
    );
  }
}