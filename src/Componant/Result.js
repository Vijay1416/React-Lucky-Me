import React from 'react'
import Section1 from './Sections/Section1'
import { Iteamslider } from './Carsoual/Iteamslider'
import Features from './Features/Features'
import Section1r from './Sections/Section1r'
import { Check } from './Checkorder/Check'
import Lotterywinn from './Lotterdetail/Lotterywinn'
import Footer from './Footer/Footer'



export  function Result() {
  return (
  <>
    <Section1r />
     <div className="sectionr4">
      <div className="sectionr4un1">
        <div className="container">
   <div className="row">
    <Lotterywinn />
   </div>
        </div>
      </div>
     </div>
    
  </>
  )
}
