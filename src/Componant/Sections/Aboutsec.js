import React from 'react'
import imga1 from "../images/about-left.png"
export default function Aboutsec() {
  return (
    <>
        <div className="aboutsec">
            <div className="aboutsecun1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aboutsecunun1">
                                <img src={imga1} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="aboutsecunun2">
                                <h2 className="title">
                                About us
                            </h2>
                            <p>
                                We offer the possibility to play the world’s
                                biggest lotteries online. Our site was designed with a lottery player in mind. We are
                                lotto
                                fans ourselves, therefore we know what it takes to satisfy one.
                            </p>
                            <p>
                                Our team is build up with lottery enthusiasts, but also industry professionals. Our
                                designers and developers ensure the smoothest lotto playing experience. Support is also
                                a
                                pillar of our operations. Our agents are always thriving to help.

                            </p>
                            <p>
                                Your satisfaction is our goal!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
