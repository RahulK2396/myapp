import { Button, Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import { Deals } from './Constant'
import "../css/DealsoftheDay.css"
import { connect } from 'react-redux'
import { storeSelectedItem } from '../action'

function DealsoftheDay(props) {
    function handleItemDetails (data){
        console.log(data)
        props.storeSelectedItem(data)
    }
    return (
        <div>
            <div className='m-4 d-flex flex-row justify-content-between align-items-center'>
                <h3>  Deals Of The Day</h3>
            </div>
            <div className='d-flex flex-row  flex-wrap  deals-div' >
                {

                    Deals.map((item) => (
                     
                        <Card className='m-3 d-flex flex-row  main_card' sx={{ width: 300 , backgroundColor: `${item.color} !important` }} >
                            <CardActionArea  style={{    borderRadius: '20px' ,height:'300px'}}>
                                <div className=' d-flex flex-row justify-content-center ' style={{position: 'relative'}}>
                                    <CardMedia style={{    borderRadius: '20px',    height: '311px'}}
                                        component="img"
                                        height="140"

                                        image={item.Image}
                                        alt={item.title}
                                    />
                                </div>
                                <CardContent   className ='textbox'>
                                    {/* <Typography gutterBottom variant="h5" component="div"  >
                                    {item.title}
                                </Typography> */}
                                    <p className='subtext'>{item.collections}</p>
                                    <p className='textColor'>{item.stock}</p>
                                    <h6> {item.title}</h6>
                                    <p>

                                        <span className='textColor '><b> {item.price} </b> </span>
                                        <span> <s>{item.strikedPrice}</s> </span>
                                    </p>
                                    <Button onClick={()=> handleItemDetails(item)} color="success" variant='contained'>Add to cart</Button>


                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
const mapDispatchToProps= (dispatch) => {
    return { 
        storeSelectedItem: (s) => {dispatch(storeSelectedItem(s))} 
    }
}

export default connect(null,mapDispatchToProps) (DealsoftheDay)