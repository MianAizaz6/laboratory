import React from 'react';
import logoDNA from '../assets/Images/biological.png'

function LabComponent() {
    return (
        <div className="labContainer">
            <div className="container p-3">
                <h3 style={{color:'white', textAlign:'center'}}>CSIR LABS-CLUSTERWISE</h3>
                
               <div className="cardContainer">
                    <div className="labcard">
                        <div className="logo">
                            <img src={logoDNA} alt="" />
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default LabComponent
