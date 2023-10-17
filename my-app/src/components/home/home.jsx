import React from "react";
import CountUp from "react-countup";

import './home.css';
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import img1 from "../../assets/img/pexels-markus-spiske-1343537.jpg";

const home = () => {


  return (
    <section className="home-wrapper ">
      <div className=" paddings innerWidth flexCenter home-container">
        {/* left side
          */}
        <div className="home-left">
          <div className="home-title">
            <h1>
              Lorem <br />
              elit. Inventore   <br />property
            </h1>
          </div>
          <div className="FlexColSatrt home-desc">
            <span className="secondaryTextfordesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <span className="secondaryTextfordesc">Temporibus, impedit at labore id voluptas a animi, .</span>
          </div>
          <div className="flexCenter stas">
            <div className="FlexColCenter sta">

              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>   </span>

              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="FlexColCenter sta">

              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>   </span>

              <span className="secondaryText">Happy customers</span>
            </div>

            <div className="FlexColCenter sta">

              <span>
                <CountUp  end={28} duration={4} />
                <span>+</span>   </span>

              <span className="secondaryText">Award winnings</span>
            </div>
          </div>
        </div>

        {/* right side
 */}

        <div className="flexCenter home-right">
          <div className="image-container">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default home; 