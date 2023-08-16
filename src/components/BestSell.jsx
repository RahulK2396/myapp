import React, { useEffect, useRef, useState } from 'react'
import { SelectData1, productList } from './Constant'
import { Button, Card, CardActionArea, CardContent, CardMedia, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../css/BestSell.css'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { connect } from 'react-redux';
import { storeSelectedItem } from '../action';

function BestSell(props) {
    const scrollableDivRef1 = useRef(null);
    const [isHovering, setIsHovering] = useState('');
    const [list, setlist] = useState([])
    const handleHover = (item) => {
        console.log('item', item)
        setIsHovering(item.title);
    };
    function handleItemDetails (data){
        console.log(data)
        props.storeSelectedItem(data)
    }
    useEffect(() => {

        var data = {
            Image: "https://boostify-nesst.myshopify.com/cdn/shop/products/product-16-5.jpg?v=1656994944&width=533",
            collections: 'Headphone, Organic Kiwi, Snack',
            stock: 'In stock',
            title: 'Organic California Spirulina Superfood',
            price: '$55.56',
            strikedPrice: '$56.0'
        }

        const updatedArray = [...productList, data];
        setlist(updatedArray)
        console.log(updatedArray)
    }, [])
    function handleMoveLeftCard (){
        console.log(scrollableDivRef1.current.scrollLeft)
        scrollableDivRef1.current.scrollLeft -= 100;}
    function handleMoveRightCard (){scrollableDivRef1.current.scrollLeft += 180;}
    return (
        <div>
            <div className='m-4 d-flex flex-row justify-content-between align-items-center'>
                <h3>  Daily Best Sells</h3>
                <div className='d-none d-lg-flex flex-row  ' style={{ gap: "45px" }}>
                    {SelectData1.map((item) => (
                        <h6>
                            {item}
                        </h6>
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
                        {SelectData1.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                        )

                        )}

                    </Select>
                </FormControl> */}
            </div>
            <div className='d-flex flex-md-row flex-column'>


                <div>
                    <div className='content-data'>
                        <h3>Bring nature <br></br>into your home</h3>
                        <Button color="success" variant='contained'>Shop Now <ArrowForwardIcon /> </Button>
                    </div>
                    <img className='image-bestSell' src='https://boostify-nesst.myshopify.com/cdn/shop/files/product-tab-banner.jpg?v=1659427624&width=768' />
                </div>
                {/* <IconButton onClick={handleMoveLeftCard}> 
                    <ArrowCircleLeftOutlinedIcon className='iconbestsell' /> </IconButton> */}
                <div className=' bestselldiv '  ref={scrollableDivRef1}>
              
                    {/* <div className='scroll-content'> */}

                        {

                            list.map((item) => (
                                <Card className='' style={{ overflow: 'unset' }}>
                                    <CardActionArea className='d-flex flex-column' style={{ width: '270px' }}>
                                        <div onMouseEnter={() => handleHover(item)} onMouseLeave={(item) => handleHover(item)} style={{ width: '170px' }}>
                                            <CardMedia

                                                component="img"

                                                image={isHovering == item.title && item.carsoualImage ? item.carsoualImage : item.Image}
                                                alt={item.title}
                                            />
                                        </div>
                                        <CardContent  >
                                         
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

                    {/* </div> */}
                </div>
                    {/* <IconButton style={{marginLeft: '60%'}} onClick={handleMoveRightCard}>
                    <ArrowCircleRightOutlinedIcon className='iconbestsell' />
                    </IconButton> */}

            </div>
        </div>
    )
}
const mapDispatchToProps= (dispatch) => {
    return { 
        storeSelectedItem: (s) => {dispatch(storeSelectedItem(s))} 
    }
}
export default connect(null,mapDispatchToProps) (BestSell)