import React,{useState,useEffect} from 'react'

import '../App.css'
import { Link } from 'react-router-dom'


import 'reactjs-popup/dist/index.css';
import Popup1 from './Popup1'
export  function Navbar() {
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 5 ? setStickyClass('fixed top-0 left-0 z-50 sticky') : setStickyClass('relative');
      }
    };
  return (
   <>
   <Popup1 />
    <nav className= {`navbar navbar-expand-lg bg-body-tertiary ${stickyClass}`}>
  <div className="container">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active firh" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/result'>Result</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/faq'>Faq</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
