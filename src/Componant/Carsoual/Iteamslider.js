import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/overlaymask1.png"
import img2 from "../images/d1.png"
import img3 from "../images/winner.png"
import img4 from "../images/time.png"
import'../App.css'
import { Sliderundata } from "../Data/Data";


export function Iteamslider()

{
    const settings = {
    dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 3,
  
  autoslide:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
     
        dots: true
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,

        dots: true
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 2,

        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1
      }
    }
    ,
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]}
  return (
    <>
    <div className="slidersec">
        <div className="slidersecun1">

     
         
        <div className="container">
       
       <Slider className="slider1" {...settings}> 
       {Sliderundata.map((slideritm ,itmv1) => (       <div className="autosl1" key={itmv1}>
       <div className="item">
                           <div className="single-draw">
                               <img className="overlay" src={img1} alt="" />
                               <div className="icon">
                                   <img src={img2} alt="" />
                               </div>
                               <h4>
                                  {slideritm.text1}<br /> <span>0</span> {slideritm.member}

                               </h4>
                               <div className="winnerimg">
                                   <h4><img src={img3} className="mx-auto" alt="" /> <span className="span1">{slideritm.winner}</span> </h4>
                               </div>
                               <a href="#" className={slideritm.class}>{slideritm.btn}</a>
                               <div className="next-draw">
                                   <span className="text">Next Draw :</span>
                                   <div className="time">
                                       <img src={img4} alt="" />
                                       <h6 className="time-countdown">
                                           <span>00</span>:
                                           <span>00</span>:
                                           <span>00</span>
                                       </h6>
                                   </div>
                               </div>
                           </div>
                       </div>
         </div>   ))}
   
      
         </Slider>
         {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div> */}
       
      </div>
        </div>
    </div>
    </>
   
  );
};