import React, { useState } from 'react'
import { Lotterydetaildata, Lotteryundata } from '../Data/Data'
import imgs1 from "../images/d1.png"
export default function Lotterywinn() {
const [show , setShow] = useState(false)
const Showitem = ()=>{
    show ? setShow(false) : setShow(true)
}



  return (
   <>

  {Lotterydetaildata.map((lotterydata ,mnlott1) =>(
 <>
 <div className="col-md-12" key={mnlott1}>
  <div className="section4un1">
    <div className="row">
        <div className="col-md-6">
            <div className="section4unun1">
            <img src={imgs1} className='img-fluid' alt="" />
            <h4 className='section4h1'>{lotterydata.text1}</h4>
            </div>
        </div>
        <div className="col-md-6">
            <div className="section4unun3">
                <span className='section4sp1'>{lotterydata.rigtext}</span>
                <h6 className='secrtion4h2'>{lotterydata.Rigtext1}</h6>
            </div>
        </div>
     
        <div className="col-md-12">
            <div className="section4unun4">
                                <div className={show ? "tabun1_Show" : "tabun1"} >
                                                                <table className="table mx-5">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">SRN</th>
                                                                            <th scope="col">Token Number</th>
                                                                            <th scope="col">Recieving Address</th>
                                                                            <th scope="col">Amount</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="#tbbody">
                                                                       { Lotteryundata.map((lotterydd ,mr1) => 

                                                                 (
                                                                    <tr key={mr1}>
                                                                    <th scope="row">{lotterydd.tbun1}</th>
                                                                    <td>{lotterydd.tbun2}</td>
                                                                    <td></td>
                                                                    <td>{lotterydd.tbun4}</td>
                                                                    </tr>
                                                                 )
)}
                                                                      
                                                                    </tbody>
                                                                </table>


                                                            </div>
                                                            <div className="col-md-12 my-4">
                                                            <div className="section4unun5">
                                                               
                                                            </div>
                                                            <button className='custom-buttonn4 show-more-btn ' onClick={Showitem}>Show more</button>
                                                            </div>
                                                            

            </div>
        </div>
    </div>
  </div>
  </div>
 </>
        ))}
   </>
  )
}
