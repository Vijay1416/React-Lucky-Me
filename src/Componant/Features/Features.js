import React from 'react'
import img1 from "../images/f1.png"
import img2 from "../images/f2.png"
import img3 from "../images/f3.png"
import img4 from "../images/f4.png"


export default function Features() {
  return (
    <div>
      <div className="section2">
        <div className="section2un1">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 my-md-0 my-3">
                        <div className="section2unun1">
                            <div className="image">
                                <img src={img1} alt="" />
                            </div>
                            <h4 className="title">
                            Trust
                            </h4>
                        </div>

                    </div>
                    <div className="col-md-3  my-md-0 my-3">
                        <div className="section2unun1">
                            <div className="image">
                                <img src={img2} alt="" />
                            </div>
                            <h4 className="title">
                            Trust
                            </h4>
                        </div>

                    </div>
                    <div className="col-md-3  my-md-0 my-3">
                        <div className="section2unun1">
                            <div className="image">
                                <img src={img3} alt="" />
                            </div>
                            <h4 className="title">
                            Trust
                            </h4>
                        </div>

                    </div>
                    <div className="col-md-3 my-md-0 my-3">
                        <div className="section2unun1">
                            <div className="image">
                                <img src={img4} alt="" />
                            </div>
                            <h4 className="title">
                            Trust
                            </h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
