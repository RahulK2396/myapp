import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton,  } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../css/Categories.css"
import { useRef } from 'react';

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {

                    overflow: 'unset !important' ,
                    borderRadius:'17px'
                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {

                    width: "80px !important",
                    height: "auto !important"
                },
            },
        },
    }

});

export default function Categories() {
    const scrollableDivRef = useRef(null);
    var categories = [{
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768',
        title1: 'Cake & Milk',
        title2: '3 Items',
        color: "#b8dbc573;"
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768',
        title1: 'Organic Kiwi',
        title2: '15 Items',
        color: '#dcc0a845'
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768',
        title1: 'Peach',
        title2: '3 Items',
        color: "#b8dbc573;"
    },

    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-9.png?v=1661416228&width=768',
        title1: 'Red Apple',
        title2: '3 Items' ,
        color: '#dcc0a845'
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-3.webp?v=1663814725&width=768',
        title1: 'Snack',
        title2: '11 Items',
        color: "#b8dbc573;"
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-1.webp?v=1663814688&width=768',
        title1: 'Vegetables',
        title2: '7 Items' ,
        color: '#dcc0a845'
    },

    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-2.webp?v=1663814655&width=768',
        title1: 'Strawberry',
        title2: '5 Items' ,
        color: "#b8dbc573;"
    },

    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-4.webp?v=1663814620&width=768',
        title1: 'Black Plum',
        title2: '10 Items',
        color: '#dcc0a845'
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-5.png?v=1661419987&width=768',
        title1: 'Custard Apple',
        title2: '3 Items',
        color: "#b8dbc573;"
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-14.webp?v=1663814382&width=768',
        title1: 'Coffee & Tea',
        title2: '7 Items' ,
        color: '#dcc0a845'
    },
    {
        image: 'https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-15.webp?v=1663814036&width=768',
        title1: 'HeadPhones ',
        title2: '7 Items',
        color: "#b8dbc573;"
    }


    ]
    function handleMoveLeftCard (){
        console.log(scrollableDivRef.current.scrollLeft)
        scrollableDivRef.current.scrollLeft -= 180;}
    function handleMoveRightCard (){scrollableDivRef.current.scrollLeft += 180;}
    return (
        <div>
            <div className='d-flex flex-row justify-content-between'>
                <h3>
                    Featured Categories
                </h3>
                <div>
                <IconButton onClick={handleMoveLeftCard}>
                    <ArrowCircleLeftIcon  sx={{ height: "55px", width: "50px" }} /> 
                    </IconButton>
                    <IconButton onClick={handleMoveRightCard}>
                    <ArrowCircleRightIcon sx={{ height: "55px", width: "50px" }} />
                    </IconButton>
                </div>
            </div>

            <div className='scroll-behavior-smooth d-flex flex-row overflow-x-scroll overflow-y-hidden card-div' ref={scrollableDivRef}>
                <ThemeProvider theme={theme} >

                    {
                        categories.map((item) => (
                            <Card className='m-3 d-flex flex-row card-data' sx={{ maxWidth: 237 , backgroundColor:`${item.color} !important` }} >
                                <CardActionArea className='main-div1'>
                                    <div className='image d-flex flex-row justify-content-center'>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                       
                                        image={item.image}
                                        alt={item.title1}
                                    />
                                    </div>
                                    <CardContent className='d-flex flex-column justify-content-center align-items-center'>
                                        <h5 className='category-heading'> {item.title1}</h5>
                                        <p> {item.title2}</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>))
                    }
                    </ThemeProvider>
            </div>
        </div>
    );
}
