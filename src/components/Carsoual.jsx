import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, ThemeProvider, createTheme } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import IconTextField from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputLabel from '@mui/material/InputLabel';
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMark from "@mui/icons-material/QuestionMark";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Box from "@mui/material/Box";
import "../css/Carousal.css";


const theme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    //   borderRadius: '8px', // Adjust the value to set the border radius
                    //   backgroundColor:'red',
                    borderBottomLeftRadius: "25px !important",
                    borderBottomRightRadius: "25px !important",
                    borderTopLeftRadius: "25px !important",
                    borderTopRightRadius: "25px !important",
                    paddingRight: 'unset !important',
                    backgroundColor: "white !important"

                },
            },
        },

        MuiButtonBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "#9fc246",


                    //   borderRadius: '8px', // Adjust the value to set the border radius
                    borderBottomLeftRadius: "25px !important",
                    borderBottomRightRadius: "25px !important",
                    borderTopLeftRadius: "25px !important",
                    borderTopRightRadius: "25px !important",
                    padding: "14px !important",

                },
            },
        },
    },


});

export default function CarouselItem(props) {
    var items = [

        {
            image: 'https://boostify-nesst.myshopify.com/cdn/shop/files/slider-1-1.jpg?v=1659427625&width=2100',
            title1: 'Don\'t miss amazing',
            title2: 'grocery deals',
            description: 'Sign Up for the daily NewsLetter'
        },
        {
            image: 'https://boostify-nesst.myshopify.com/cdn/shop/files/slider-1-2.jpg?v=1659427625&width=2100',
            title1: 'Fresh Vegetables',
            title2: 'Big Discount' ,
            description: 'Tell your Story'
        }
    ]

    return (
        <Carousel animation='slide'>
            {
            items.map((item, i) => (
                    <Paper style={{position: "relative"}}>
                        <div className='carousal-headingbox'>
                            <ThemeProvider theme={theme} >
                                <h1 className='carousal-1-title'>{item.title1}</h1>
                                <h1 className='carousal-1-title'>{item.title2}</h1>
                                <h6 className='carousal-subheading' >{item.description}</h6>
                                <FormControl variant="outlined">
                                    <TextField id="outlined-basic" placeholder="Your Email Address" variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button variant="contained" color="success">Subscribe</Button>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </FormControl>
                            </ThemeProvider>
                        </div>
                        <img className='carousal-image1'  width={'2376'} height={'600'} src={item.image} />


                    </Paper>
                ))
            }
        </Carousel>
    )
}

