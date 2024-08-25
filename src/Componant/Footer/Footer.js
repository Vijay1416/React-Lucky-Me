import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
   <div className="footer">
    <div className="footerun1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-top_area">
                    <div className="right">
                                <ul className="links">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/result">Results</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">Faq's</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                    </div>
                    <div className="copyright-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <hr className="hr2" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="copyr-text">
                            <span>
                                Copyright © 2020.All Rights Reserved By
                            </span>
                            <a href="#">Lucky Drow</a>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center my-md-0 my-3">
                        <ul className="footer-social-links">
                            <li>
                                <a href="#">
                                <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-dribbble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
