import React from 'react'
import freedelivery from '../images/freedelivery.png'
import bestprices from '../images/bestprices.png'
import deal from '../images/greatdeal.png'
import wide from '../images/wideassortment.png'
import easy from '../images/easyreturn.png'
import '../css/TagDetails.css'
function TagDetails() {
  return (
    <div className='d-flex flex-row tagGap flex-wrap  '>
        <img className='tagimage' src= {bestprices}/>
        <img  className='tagimage' src= {freedelivery}/>
        <img className='tagimage' src= {deal}/>
        <img className='tagimage' src= {wide}/>
        <img className='tagimage' src= {easy}/>
    </div>
  )
}

export default TagDetails