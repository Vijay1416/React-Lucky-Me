import React from 'react'
import imgsr1 from "../images/result.jpg"
import '../App.css'
export default function Section1r() {
  return (<>
 <div className="sectionr1">
    <div className="sectionrun1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
              <div className="sectionrunun1">
                <h2 className='title sectionr1h1'>
                    Results
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                        <a href="index.html">
                            Home
                        </a>
                    </li>
                    <i className="fa fa-long-arrow-right lotterlo1"></i>
                    <li>
                        <a href="result.html">Results</a>
                    </li>
                </ul>
              </div>
                </div>
            </div>
        </div>
    </div>
 </div>
 <div className="sectionr2 results">
 <div className="top-image">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="image">
                            <img src={imgsr1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </div>
 <div className="sectionr3">
    <div className="container">
    <div className="row">
             
             <div className="col-md-6 col-lg-4 mx-auto">
             <div className="check-box">
                     <h4 className="title">Enter Your Token Number</h4>
                     <div className="form-area input-round-wrapper">
                         <input type="text" className="input-round" />
                         <input type="text" className="input-round" />
                         <input type="text" className="input-round" />
                         <input type="text" className="input-round" />
                         <input type="text" className="input-round" />
                         <input type="text" className="input-round" />
                     </div>
                 </div>
             </div>
          
         </div>
    </div>
 </div>
 </>
  )
}
