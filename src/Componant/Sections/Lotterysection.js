import React from 'react'
import Lotterywinn from '../Lotterdetail/Lotterywinn'

export default function Lotterysection() {
  return (
   <>
    <div className="section3">
        <div className="section3un1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section3unun1">
                            <h1 className='section3h1'>
                                Latest Lottery results
                            </h1>
                            <p className='section3p1'>
                                Check Your lotto online, find all the lotto winning numbers and see
                                if you won the latest lotto jackpots
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12  my-4">
                        <div className="section3unun2">
                            <h4 className='section3h2' >
                            Lottery Winning Numbers
                            </h4>
                        </div>
                    </div>
                    
                        <Lotterywinn />
                    
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
