import React from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "../css/Subscribe.css";



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

export default function Subscribe(props) {
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
            title2: 'Big Discount',
            description: 'Tell your Story'
        }
    ]
    return (
        <div className='subscribe-div'>
            <ThemeProvider theme={theme} >
                <div className='subscribtion'>
                <h1 className=''>Stay home & get your daily</h1>
                <h1 className=''>needs from our shop</h1>
                <h6 className='subscribe-subheading' >Start You'r Daily Shopping with Nest Mart</h6>
                <FormControl variant="outlined">
                    <TextField id="outlined-basic" placeholder="Your Email Address" variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end" className='InputEnd'>
                                    <Button variant="contained" color="success">Subscribe</Button>
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
                </div>
            </ThemeProvider>
        </div>
    )
                    
                    }
