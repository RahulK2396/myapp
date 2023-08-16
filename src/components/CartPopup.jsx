import { Button, Dialog, IconButton, List, ListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import '../css/CartPopup.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    /* Add your custom styles here */
                    maxWidth: '600px', // Example: Set a maximum width
                    borderRadius: '8px', // Example: Set border radius
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Example: Add a shadow
                    justifyContent: 'end !important',
                    height: 'unset'

                },
                scrollPaper: {

                    justifyContent: 'end !important',
                    height: 'unset'

                },

            },
        },
    },
});

function CartPopup(props) {

    const [sum, setSum] = useState(0)
    const [cartItems, setCartItems] = useState(props.cartDetails);
    const history = useNavigate();
    useEffect(() => {
        const unique = [];

        

        props.cartDetails.forEach((reduxItem) => {
            const existingItem = unique.find((unqItem) => unqItem.title === reduxItem.title);
       
            if (existingItem) {
                existingItem.count++;
            } else {
                unique.push({ ...reduxItem, count: 1 });
            }
        });

        setCartItems(unique)
        props.cartDetails.map((item) => {

            // if (item.price) {
                const amountWithoutDollarSign = item.price.replace("$", "");
                setSum(sum + +(amountWithoutDollarSign))
            // }
        })

    }, [props.cartDetails])

    const handleClose = () => {
        props.onClose();
    };

    function handleViewCart() {
        history('/Cart');
    }


    return (
        <ThemeProvider theme={theme}>
            <Dialog className='cart-dialog' open={props.open}>
                <IconButton  className='justify-content-end' onClick={handleClose}>


                    <CloseIcon />


                </IconButton>
                {cartItems.length >0 ?
                <div>
                <List sx={{ pt: 0, margin:"13px" ,height:'250px', overflowY:'scroll'}}>
                    {cartItems.map((item) => (
                        <ListItem disableGutters>
                            <div className='d-flex flex-row'>
                                <img style={{ width: '53px' }} src={item.Image} />
                                <div>
                                    <h6> {item.title}</h6>
                                    <p>

                                        <span className='textColor '><b> {item.count} × {item.price} </b> </span>
                                        <span> <s>{item.strikedPrice}</s> </span>
                                    </p>
                                </div>
                            </div>

                        </ListItem>
                    ))}

                </List>
                <div className='d-flex flex-row justify-content-between m-3' style={{borderTop:'1px solid lightgrey'}}>
                    <h5>Total</h5>
                    <span className='textColor'>${sum.toFixed(2)}</span>
                </div>
                <div className='d-flex flex-row justify-content-between m-3'>
                    <Button onClick={handleViewCart} variant='outlined' color='success'>View Cart</Button>
                    <Button variant='contained' color='success'>Checkout</Button>
                </div>
                </div>
        :
        <p>Your cart is currently empty.</p>}
            </Dialog >

        </ThemeProvider>
    )

}

const mapStateToProps = (popularReducer) => {
    console.log("Navbar Comp", popularReducer.selectedItems.selectedItems)
    return {
        cartDetails: popularReducer.selectedItems.selectedItems
    }
}

export default connect(mapStateToProps, null)(CartPopup)