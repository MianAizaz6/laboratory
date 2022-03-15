import React,{Fragment} from 'react';
import '../assets/scss/topsection.scss';
import Logo from '../assets/Images/csir.png'
import Logo1 from '../assets/Images/img-a.png'

function TopSection() {
  return (
      <Fragment>
        <div className="container-fluid bg-grey">
            <div className="container">
                    <div className="row">
                            <div className="col-md-6 ms-auto col-sm-10">
                                <ul className="top__section mb-0">
                                    <li>Employer Conrner</li>
                                    <li>Screen Reader Access</li>
                                    <li><i class="fas fa-share-square"></i></li>
                                    <li><i class="fas fa-share-square"></i></li>
                                    <li><i class="fas fa-share-square"></i></li>
                                    <li><i class="fas fa-share-square"></i></li>

                                </ul>
                            </div>
                            
                    </div>
                    
            </div>
        </div>
        <div className="container-fluid">
            <div className="container">
                   
                    <div className="row p-2 d-flex justify-content-center">
                        <div className="col-md-6 sm-12 lg-6">
                            <div className="logo-section">
                                <img src={Logo} alt="" />
                                <p>
                                    COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH
                                    MINISTRY OF SCIENCE & TECHNOLOGY, GOVT. OF INDIA</p>
                            </div>
                        </div>
                        <div className="col-md-6 sm-12 md-6">
                            <div className="logos">
                                <a href="##"><img src={Logo1} alt="Logo" /></a>
                                <a href="##"><img src={Logo1} alt="Logo" /></a>
                                <a href="##"><img src={Logo1} alt="Logo" /></a>
                                <a href="##"><img src={Logo1} alt="Logo" /></a>
                                <a href="##"><img src={Logo1} alt="Logo" /></a>
                                
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </Fragment>
  )
}

export default TopSection
