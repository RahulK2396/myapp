import React from 'react'
import { ListInfoTopSelling, RecentlyAdded, TopRated, TrendingProducts } from './Constant'
import "../css/ListInfo.css"
function ListInfo() {
    return (
        <div className='d-flex flex-row main-div-listInfo div-gap flex-wrap justify-content-around '>
            <div className='d-flex flex-column div-gap separate-div'> 
                <h4 className='h4-listInfo'>  Top Selling    </h4>
                {ListInfoTopSelling.map((item) => (
                    <div className='d-flex flex-row div-gap'>
                        <img src={item.Image} className='imagesize' />
                        <div>
                            <h6> {item.title}</h6>
                            <p>
                                <span className='textColor '><b> {item.price} </b> </span>
                                <span> <s>{item.strikedPrice}</s> </span>
                            </p>
                        </div>
                    </div>

                ))
                }
            </div>
            <div className='d-flex flex-column div-gap separate-div'>
                <h4 className='h4-listInfo'>   Trending Products    </h4>
                {TrendingProducts.map((item) => (
                    <div className='d-flex flex-row div-gap'>
                        <img src={item.Image} />
                        <div>
                            <h6> {item.title}</h6>
                            <p>
                                <span className='textColor '><b> {item.price} </b> </span>
                                <span> <s>{item.strikedPrice}</s> </span>
                            </p>
                        </div>
                    </div>

                ))
                }
            </div>
            <div className='d-flex flex-column div-gap separate-div'>
                <h4 className='h4-listInfo'>   Recently Added    </h4>
                {RecentlyAdded.map((item) => (
                    <div className='d-flex flex-row div-gap'>
                        <img src={item.Image} />
                        <div>
                            <h6> {item.title}</h6>
                            <p>
                                <span className='textColor '><b> {item.price} </b> </span>
                                <span> <s>{item.strikedPrice}</s> </span>
                            </p>
                        </div>
                    </div>

                ))
                }
            </div>
            <div className='d-flex flex-column div-gap separate-div'>
                <h4 className='h4-listInfo'>  Top Rated    </h4>
                {TopRated.map((item) => (
                    <div className='d-flex flex-row div-gap'>
                        <img src={item.Image} />
                        <div>
                            <h6> {item.title}</h6>
                            <p>
                                <span className='textColor '><b> {item.price} </b> </span>
                                <span> <s>{item.strikedPrice}</s> </span>
                            </p>
                        </div>
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default ListInfo