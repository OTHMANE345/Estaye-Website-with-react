import React from "react";
import './Recedencies.css';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import img1 from "../../assets/img/pexels-markus-spiske-1343537.jpg";
import { sliderSettings } from "./commons";
const Recedencies = () => {


  return (
    <sextion className=" r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head FlexColSatrt">
                <span className="orangeText">Best Choices</span>
                <span className="primarText">Popular Recedencies</span>
            </div>
<Swiper {...sliderSettings}>
<Sliderbuttons/>
    <SwiperSlide key={1}>
      <div className="FlexColSatrt r-card">
      <img src={img1} alt="" />
      <span className="secondaryText r-price">
        <span style={{color:"orange"}}>$</span>
        <span>230000</span>
      </span>
      <span className="primarText">name</span>
      <span className="secondaryText">detail</span>

      </div>
    </SwiperSlide>
    
    <SwiperSlide key={2}>
      
      <div className="FlexColSatrt r-card">
      <img src={img1} alt="" />
      <span className="secondaryText r-price">
        <span style={{color:"orange"}}>$</span>
        <span>230000</span>
      </span>
      <span className="primarText">name</span>
      <span className="secondaryText">detail</span>

      </div>
    </SwiperSlide>
    <SwiperSlide key={3}>
      <div className="FlexColSatrt r-card">
      <img src={img1} alt="" />
      <span className="secondaryText r-price">
        <span style={{color:"orange"}}>$</span>
        <span>230000</span>
      </span>
      <span className="primarText">name</span>
      <span className="secondaryText">detail</span>

      </div>
    </SwiperSlide>
    <SwiperSlide key={4}>
      <div className="FlexColSatrt r-card">
      <img src={img1} alt="" />
      <span className="secondaryText r-price">
        <span style={{color:"orange"}}>$</span>
        <span>230000</span>
      </span>
      <span className="primarText">name</span>
      <span className="secondaryText">detail</span>

      </div>
    </SwiperSlide>
</Swiper>
        </div>
    </sextion>
  );
};

export default Recedencies  ; 

const Sliderbuttons = () => {
  const swiper = useSwiper();
  return (
<div className="flexCenter r-button">
  <button onClick={()=> swiper.slidePrev()}>&lt;</button> 
   <button onClick={()=> swiper.slideNext()}>&gt;</button>

</div>
  );
};