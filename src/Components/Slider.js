import React from 'react'
import '../assets/scss/Slider.scss';
import video from '../assets/Images/Website_Banner.mp4'

function Slider() {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className="background">
                            <div className="content">             
                            <video id="video_player" loop autoPlay muted>
                                    <source
                                    src={video}
                                    type="video/mp4"
                                    />
                            </video>
                            </div>
                    </div>

                </div>
                <div className='col-lg-4'>
                    <h1 className='py-2 display-4'>Latest News</h1>
                    <div className='news-section d-flex flex-column'>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                        <div className='news-block'>news</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
