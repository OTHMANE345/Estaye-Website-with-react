import React from "react";
import CountUp from "react-countup";

import './contact.css';
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import img1 from "../../assets/img/pexels-markus-spiske-1343537.jpg";
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';


const contact = () => {
    return (
   
      
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="c-left FlexColSatrt">
            <span className="orangeText"> Our Contacts</span>
                <span className="primarText">Eqay to contact us</span>
                <span className="secondaryText">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, magnam 
                    qui vel odio quo expedita eius id laboriosam repellendus, quisquam cumque et repudiandae laudantium reprehenderit, cupiditate porro dicta quod?
                </span>
                <div className="FlexColSatrt contactModes">
                    <div className="flexCenter row">
                        <div className="FlexColSatrt mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                     <MdCall size={25}/> 
                                </div>
                                <div className="FlexColSatrt detail">
                                    <span className="primarText">
                                        Call
                                    </span>
                                    <span className="secondaryText">
                                        5545334234
                                    </span>
                                </div>
                            </div>
                            <button className="FlexColSatrt button">
                                Call now
                            </button>
                        </div>
                         <div className="FlexColSatrt mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/> 
                                </div>
                                <div className="FlexColSatrt detail">
                                    <span className="primarText">
                                        Call
                                    </span>
                                    <span className="secondaryText">
                                        5545334234
                                    </span>
                                </div>
                            </div>
                            <button className="FlexColSatrt button">
                                Call now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                <img src={img1} alt="" />
                </div>
               
            </div>
        </div>
    </section>

);
};

export default contact; 