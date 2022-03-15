import React from 'react';
import Logo1 from '../Images/img-a.png';
import '../Styles/TopSection.css';


function Team() {
    return (
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="teamCard">
                           <div>
                           <img src={Logo1} alt="" />
                           </div>
                           <div>
                               <h4>President Narendra Modi</h4>
                               <p>President CSIR</p>
                           </div>
                            
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="teamCard">
                           <div>
                           <img src={Logo1} alt="" />
                           </div>
                           <div>
                               <h4>President Narendra Modi</h4>
                               <p>President CSIR</p>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
