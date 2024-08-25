import React from 'react'
import Popup from 'reactjs-popup';
import logo1 from "../images/lucky.png"
import img1 from "../images/google.png"
export default function Popup1() {
  return (
    <div className="navbar-top">
    <div className="navbartopun1">
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex">
                    <div className="logodiv">
                        <img src={logo1} className="logonavim" alt="" />
                    </div>
                
                    <div className="topnavunun1">
                    <Popup trigger={  <a  className='topnavbtn'>Connect Wallet</a>} position="right center">
                    <div className="modal-content">
            <div className="modal-body">
                <div className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" >×</span>
                </div>
                <div className="log-reg-inner">
                    <h2 className="title">
                        Welcome to Fantra
                    </h2>
                    <div className="main-content">
                        <form action="#">
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" className="my-form-control" placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="my-form-control" placeholder="Enter Your Password" />
                            </div>
                            <p className="f-pass">
                                Forgot your password? <a href="#">recover password</a>
                            </p>
                            <div className="button-wrapper">
                                <button type="submit" className="custom-button2">Sign In</button>
                            </div>
                            <div className="or log">
                                <p>OR</p>
                            </div>
                            <div className="or-content">
                                <p>Sign up with your email</p>
                                <a href="#" className="or-btn"><img src={img1} alt="" /> Sign Up with
                                    Google</a>
                                <p className="or-signup margtp">
                                    Don't have an account? <a href="#" data-toggle="modal" data-target="#registerModal">
                                        Sign up here
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</Popup>
                     
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}
