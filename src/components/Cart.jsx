import React, { useEffect, useState } from 'react'
import "../css/Cart.css"
import { connect } from 'react-redux'
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
import { removeItem, storeSelectedItem } from '../action';


const theme = createTheme({
    components: {
        MuiInputBase: {
        styleOverrides: {
            root: {

               textAlign:'center',
               width: "74px",
        color: "green",
        border:" 1px solid green",
            },
        },
      },
    },
  });

  

function Cart(props) {
    var arr=[' Product','Unit Price', 'Quantity', 'Total', 'Remove']
    const [sum, setSum] = useState('')
    const [strikedSum, setStrikedSum] = useState('')
    const [cartItems, setCartItems] = useState(props.cartDetails);
    useEffect(() => {
        const unique = [];
     
        let total=0;
        let stotal=0;

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
                const strikedAmountWithoutDollarSign = item.strikedPrice.replace("$", "");
                console.log('amountWithoutDollarSign',amountWithoutDollarSign,sum);
                 total = total + +(amountWithoutDollarSign)
                 stotal = stotal + +(strikedAmountWithoutDollarSign)
                 
             
            // }
        })
        setSum(total)
        setStrikedSum(stotal)
    }, [props.cartDetails])
    


    function handleCounting (e,product){
        if(e.target.value >0 ){
       
          const updatedCart = cartItems.map(item =>{
            if (item.title === product.title) {
                const amountWithoutDollarSign = product.price.replace("$", "");
                const strikedAmountWithoutDollarSign = item.strikedPrice.replace("$", "");
                setStrikedSum(strikedSum + +(strikedAmountWithoutDollarSign))
                setSum(sum + +(amountWithoutDollarSign))
                return { ...item, count: e.target.value };
              } else {
                return item;
              }
            }
          );
          setCartItems(updatedCart);
       
        
    }
      };
    function itemDelete (productId){
        // const updatedId = cartItems.filter(item => item.title !== productId.title );
        // setCartItems(updatedId);
        // console.log(updatedId);
        props.removeItem(productId)
    }
    console.log(sum);
  return (
    <div className='cartmaindiv'>
        <div>
            <h3>
                Your Cart
            </h3>
            </div>
            <div className='d-flex flex-row flex-wrap'>
                <table style={{width:'58%',height:'20px'}}>
                    <thead className='cart-thead'>
                        {arr.map((item)=> (
                            <th>
                                {item}
                            </th>
                            
                        ))}
                    </thead>
                    <tbody>
                            {
                                cartItems.map((item)=>{
                                    const amountWithoutDollarSign = item.price.replace("$", "");
                                   return <tr>
                                    <td className='cart-product-td d-flex flex-row'>
                                       <img style={{width:'119px'}} src= {item.Image}/>
                                       <span className='cart-product-title d-flex align-items-center'>{item.title}</span>
                                       <div className='card-item-info hidden-tablet'>
                                       <p className='hidden-tablet'>
                                        <span> <s>{item.strikedPrice}</s> </span>
                                        <span className=''><b> {item.price} </b> </span>
                                        </p>
                                        <ThemeProvider theme={theme} >
                                    <TextField  id="outlined-basic" className='cart-input '  onChange={(e) => handleCounting(e,item)} value={item.count} variant="outlined" type='number' />
                                     </ThemeProvider> 
                                       </div>
                                       <div className='hidden-tablet'>
                                       <IconButton className='hidden-tablet' onClick={()=>itemDelete(item)} > 
                                        <DeleteForeverIcon />
                                        </IconButton>
                                        </div>

                                    </td>
                                    <td className='hidden-mobile'>
                                    <p >
                                    <span> <s>{item.strikedPrice}</s> </span>
                                    <span className=''><b> {item.price} </b> </span>
                                    </p>
                                    </td>
                                    <td className='hidden-mobile'>
                                    <ThemeProvider theme={theme} >
                                    <TextField id="outlined-basic" className='cart-input'  onChange={(e) => handleCounting(e,item)} value={item.count} variant="outlined" type='number' />
                                     </ThemeProvider>   
                                    </td>
                                    <td className='hidden-mobile'>
                                        {(item.count* +(amountWithoutDollarSign)).toFixed(2)}
                                    </td>
                                    <td className='hidden-mobile'>
                                        <IconButton onClick={()=>itemDelete(item)} > 
                                        <DeleteForeverIcon/>
                                        </IconButton>
                                    </td>
                                    
                                    </tr>
                                })
                            }
                    </tbody>
                </table>
          
            <div className='sub-div-cart '>
                <p>Order special instructions</p>
                <textarea rows="4" cols="50"></textarea>
                <div className='d-flex flex-row text-end'>
                    <h5>SubTotal:</h5>
                    <div>
                    <h3 style={{color:'green'}}>${sum}</h3>
                    <h6 style={{color:'green'}}>You saved: ${strikedSum}</h6>
                    <p style={{color:'green'}}>Taxes and shipping calculated at checkout</p>
                    </div>
                </div>
                <div className='text-center'>
                <Button variant='contained' color='success'>Proceed To Checkout</Button>
                </div>
            </div>
            </div>
    </div>

  )
}

const mapStateToProps = (popularReducer) => {
  console.log("Cart", popularReducer.selectedItems.selectedItems)
  return {
    cartDetails: popularReducer.selectedItems.selectedItems
  }
}
const mapDispatchToProps= (dispatch) => {
    return { 
        storeSelectedItem: (s) => {dispatch(storeSelectedItem(s))} ,
        removeItem: (s) => {dispatch(removeItem(s))} 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)