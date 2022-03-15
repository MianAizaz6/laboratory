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
                        <h1>78</h1>
                        <h5>Biological Sciences</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>78</h1>
                        <h5>Biological Sciences</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>78</h1>
                        <h5>Biological Sciences</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>78</h1>
                        <h5>Biological Sciences</h5>
                    </div>
                    <div className="labcard">
                        <div className="imgContainer ">
                            <img src={logoDNA} alt="" />
                           
                        </div>
                        <h1>78</h1>
                        <h5>Biological Sciences</h5>
                    </div>

               </div>
            </div>
           
        </div>
    )
}

export default LabComponent
