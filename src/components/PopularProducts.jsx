import { Button, Card, CardActionArea, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import "../css/PopularProducts.css"
import { SelectData, productList, productList2 } from './Constant'
import { connect } from 'react-redux';
import { storeSelectedItem } from '../action';



function PopularProducts(props) {
    const [isHovering, setIsHovering] = useState('');

    const handleHover = (item) => {
        console.log('item',item)
        setIsHovering(item.title);
      };
function handleItemDetails (data){
    console.log(data)
    props.storeSelectedItem(data)
}

    return (
        <div>
            <div className='m-4 d-flex flex-row align-items-center justify-content-between'>
                <h4>  Popular Products</h4>
                <div className='d-none d-lg-flex flex-row  ' style={{ gap: "45px" }}>
                    {SelectData.map((item) => (
                        <h4>
                            {item}
                        </h4>
                    )

                    )}
                </div>

                {/* <FormControl size='medium' className='d-flex d-lg-none'>
                    <InputLabel id="demo-simple-select-label">Products</InputLabel>
                    <Select style={{ width: "128px" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"

                        label="Products"

                    >
                        {SelectData.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                        )

                        )}

                    </Select>
                </FormControl> */}
            </div>
            <div className='productDiv'>
                {
                    productList.map((item) => (
                        <Card className='product-card-div'>
                            <CardActionArea className='d-flex flex-column'>
                                <div onMouseEnter={() => handleHover(item)} onMouseLeave={(item) => handleHover(item)} style={{ width: '170px' }}>
                                    <CardMedia
                                        component="img"

                                        image={ isHovering == item.title && item.carsoualImage ? item.carsoualImage : item.Image}
                                        alt={item.title}
                                    />
                                </div>
                                <CardContent  >
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
                                    <Button color="success" variant='contained' onClick={()=> handleItemDetails(item)}>Add to cart</Button>


                                </CardContent>
                            </CardActionArea>
                        </Card>))


                }
                {
                    productList2.map((item) => (
                        <Card className='product-card-div'>
                            <CardActionArea className='d-flex flex-column'>
                                <div style={{ width: '170px' }}>
                                    <CardMedia
                                        component="img"

                                        image={item.Image}
                                        alt={item.title}
                                    />
                                </div>
                                <CardContent  >
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
                        </Card>))


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

export default connect(null,mapDispatchToProps) (PopularProducts)
