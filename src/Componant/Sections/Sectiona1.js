import React from 'react'
import imgsa1 from "../images/about-counter-bg.jpg"
import imgsa2 from "../images/ac1.png"
import imgsa3 from "../images/ac2.png"
import imgsa4 from "../images/ac3.png"
export default function Sectiona1() {
  return (
   <>
    <div className="sectionr1">
    <div className="sectionrun1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
              <div className="sectionrunun1">
                <h2 className='title sectionr1h1'>
                    About US
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                        <a href="index.html">
                            Home
                        </a>
                    </li>
                    <i className="fa fa-long-arrow-right lotterlo1"></i>
                    <li>
                        <a href="result.html">About Us</a>
                    </li>
                </ul>
              </div>
                </div>
            </div>
        </div>
    </div>
 </div>
 <div className="sectiona1">
    <div className="sectionaun1 about-counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="sectionaunun1">
                        <div className="image">
                            <img src={imgsa1} alt="" />
                        </div>
                    </div>
                    <div className="counter-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 mx-auto">
                                <div className="counter-area-inner">
                                    <div className="row">
                                        <div className="col-lg-4 my-md-0 my-2">
                                            <div className="c-box">
                                                <img className="icon" src={imgsa2} alt="" />
                                                <h3 className="number">23</h3>
                                                <p className="text">Winners Last Month</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 my-md-0 my-2">
                                            <div className="c-box">
                                                <img className="icon" src={imgsa3} alt="" />
                                                <h3 className="number">2837K</h3>
                                                <p className="text">Tickets Sold</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 my-md-0 my-2">
                                            <div className="c-box">
                                                <img className="icon" src={imgsa4} alt="" />
                                                <h3 className="number">28387K</h3>
                                                <p className="text">Payout to Winners</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
   </>
  )
}
