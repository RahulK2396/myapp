import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../css/ProductAdd.css"
export default function ProductAdd() {
    var categories = [{
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/files/banner-1.png?v=1659435495&width=768',
        title: 'Everyday Fresh & Clean with Our Products'
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/files/banner-2.png?v=1659491181&width=768',
        title: 'Make Your BreakFast healthy & Easy'
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/files/banner-3.png?v=1659491181&width=768',
        title: 'The Best Organic Products Online'
    }
    ]
    return (
        <div className='d-flex flex-wrap '>
            {
                categories.map((item) => (
                    <Card className='productcard-div  col-md-5 col-lg-3'>
                        <CardActionArea>
                            <div>
                            <CardMedia style={{ position:"relative"}}
                                component="img"
                               
                                image={item.image}
                                alt={item.title}
                            />
                            </div>
                            <CardContent  style={{position:'absolute',fontWeight:'bold', top:'1%', padding:'0 3rem'}} className='d-flex flex-column align-items-start content-product'>
                            {/* <Typography gutterBottom variant="h5" component="div"  >
                                    {item.title}
                                </Typography> */}
                                    <h5> {item.title}</h5>
                                <Button color="success" variant='contained'>Shop Now</Button>

                                
                            </CardContent>
                        </CardActionArea>
                    </Card>))
            }
        </div>
    );
}
