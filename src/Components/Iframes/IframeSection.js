import React from 'react'
import IframeComponent from './IframeComponent'

function IframeSection() {
  return (
    <div className='row gx-0'>
        <div className='col-lg-6 p-0'>
            <IframeComponent source={"https://www.youtube.com/embed/X8ipUgXH6jw"} title={"Twitter"}/>
        </div>
        <div className='col-lg-6 p-0'>
        <IframeComponent source={"https://www.youtube.com/embed/X8ipUgXH6jw"} title={"Facebook"}/>
        </div>
    </div>
  )
}

export default IframeSection