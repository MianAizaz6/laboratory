import React from 'react';
import logoDNA from '../assets/Images/biological.png'
import Logo1 from '../assets/Images/img-a.png';

function LabComponent() {
    return (
        <div className="labContainer">
            <div className="container p-3">
                <h3 style={{color:'white', textAlign:'center'}}>CSIR LABS-CLUSTERWISE</h3>
                
               <div className="cardContainer mt-4 pb-2">
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>20+</h1>
                        <h5>Research Labs</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>29</h1>
                        <h5>Scientists</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>10</h1>
                        <h5>Engineers</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>50</h1>
                        <h5>Products</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>3</h1>
                        <h5>Pilot Plants</h5>
                    </div>

               </div>
            </div>
           
        </div>
    )
}

export default LabComponent
