
import Section1 from './Sections/Section1'
import { Iteamslider } from './Carsoual/Iteamslider'
import Features from './Features/Features'
import Lotterysection from './Sections/Lotterysection'
import {Check} from './Checkorder/Check'
import Footer from './Footer/Footer'
import React, { Component } from "react";



export  function Home() {
  
  return (
    <div>
     
      <Section1 />
      <Iteamslider />
      <Features />
      <Lotterysection />
      <Check />
      
     
    </div>
  )
}
