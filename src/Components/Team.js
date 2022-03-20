import React from 'react';
import Logo1 from '../assets/Images/img-a.png';
import '../assets/scss/topsection.scss';
import AvatarLogo from '../assets/Images/mainImages/ChairmanPCSIR.jpeg';



function Team() {
    return (
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="teamCard d-flex justify-content-center">
                           <div className='image-team'>
                            <img src={AvatarLogo} alt="" />
                           </div>
                           <div>
                               <h4>Dr. Syed Hussain Abidi</h4>
                               <p style={{fontSize:'1rem'}}>Chairman PCSIR </p>
                           </div>
                            
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="teamCard d-flex justify-content-center">
                           <div className='image-team'>
                            <img src={AvatarLogo} alt="" />
                           </div>
                           <div>
                               <h4>Engr. Adnan Akram, DG</h4>
                               <p style={{fontSize:'1rem'}}>Director General PCSIR Lab <br/> Complex Peshawar </p>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team