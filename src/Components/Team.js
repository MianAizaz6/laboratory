import React from 'react';
import Logo1 from '../assets/Images/img-a.png';
import '../assets/scss/topsection.scss';
import AvatarLogo from '../assets/Images/modi.png';



function Team() {
    return (
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="teamCard">
                           <div>
                           <img src={AvatarLogo} alt="" />
                           </div>
                           <div>
                               <h4>President Narendra Modi</h4>
                               <p style={{fontSize:'1rem'}}>President CSIR</p>
                           </div>
                            
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="teamCard">
                           <div>
                           <img src={AvatarLogo} alt="" />
                           </div>
                           <div>
                               <h4>President Narendra Modi</h4>
                               <p style={{fontSize:'1rem'}}>President PCSRI</p>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team