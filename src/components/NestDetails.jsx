import React from 'react'
import logo from '../images/logo.png'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Box } from '@mui/material';
import '../css/NestDetails.css'
function NestDetails() {
    var Company =['About Us', 'Delivery Information', 'Privacy Policy' , 'Terms & Conditions','Contact Us','Support Center','Careers']
    var Account =['Sign In', 'View Cart', 'My Wishlist' , 'Track My Order','Help Ticket','Shipping Details','Compare products']
    var Corporate =['Become a Vendor', 'Affiliate Program', 'Farm Business' , 'Farm Careers','Our Suppliers','Accessibility','Promotions']
    var Information =['Milk & Flavoured Milk', 'Butter and Margarine', 'Eggs Substitutes' , 'Marmalades','Sour Cream and Dips','Tea & Kombucha','Cheese']
    
    return (
        // <div className='container'> 

        <div className=' d-flex flex-row flex-wrap margin' style={{marginTop:'44px'}}>
            <Box className=' col-md-3 col-6 sub-nest-div'>
            <div className='d-flex flex-column'>
            {/* <img src={logo} style={{width:'90px'}} /> */}
                <span>
                    Pellentesque posuere orci lobortis
                </span>
                </div>
                <div>

                    < PlaceOutlinedIcon style={{ color: '#3bb77e' }} />
                    <span >
                        <b>Address: </b> <br/>5171 W Campbell Ave Kent, Utah 53127   <br/>  United States
                    </span>
                </div>
                <div>
                    <HeadsetMicOutlinedIcon style={{ color: '#3bb77e' }} />
                    <span>  <b> Call Us:</b> <br/>
                    (+91) - 540-025-124553 </span>
                 </div>
                 <div>
                    <EmailOutlinedIcon style={{ color: '#3bb77e' }} />
                    <span>  <b> Email: </b> <br/>
                    sale@Nest.com </span>
                 </div>
                 <div>
                    <AccessTimeOutlinedIcon style={{ color: '#3bb77e' }} />
                    <span>  <b> Hours:</b> <br/>
                    10:00-18:00,Mon-Sat</span>
                 </div>
            </Box>
            <Box className=' col-md-3 col-6 sub-nest-div'>
                <h3  className='text-start'>
                    Company
               </h3>
               <ul className='listdetails'>
                {Company.map((item)=>(
                    <li  className='li_gap'>{item}</li>
                ))}
               </ul>
            </Box>
            <Box  className=' col-md-3 col-6 sub-nest-div'>
                <h3  className='text-center'>
                    Account
               </h3>
               <ul className='listdetails'>
                {Account.map((item)=>(
                    <li className='li_gap'>{item}</li>
                ))}
               </ul>
            </Box>
            <Box  className='col-md-3  col-6 sub-nest-div'>
                <h3  className='text-center'>
                    Corporate
               </h3>
               <ul className='listdetails'>
                {Corporate.map((item)=>(
                    <li className='li_gap'>{item}</li>
                ))}
               </ul>
            </Box>
            <Box  className=' col-md-3 col-6 sub-nest-div'>
                <h3  className='text-center'>
                    Information
               </h3>
               <ul className='listdetails'>
                {Information.map((item)=>(
                    <li className='li_gap' >{item}</li>
                ))}
               </ul>
            </Box>
            <div className= 'd-flex flex-column  col-md-4 col-6 sub-nest-div' >
                <h3 className='text-center'>
                    App & Payment
               </h3>
               <span className='li_gap'>
               From App Store or Google Play
               </span>
               <img  className='li_gap'style={{    width: '128px'}} src='https://boostify-nesst.myshopify.com/cdn/shop/files/app-store.jpg?v=1656495473&width=500'/>
               <img className='li_gap' style={{    width: '128px'}} src='https://boostify-nesst.myshopify.com/cdn/shop/files/google-play.jpg?v=1656495483&width=500'/>
               <span className='li_gap'>
               Secured Payment Gateways
               </span>
              <img  className='li_gap'src= 'https://boostify-nesst.myshopify.com/cdn/shop/files/download.png?v=1656495526&width=500'/>
            </div>
        </div>
        // </div>
    )
}

export default NestDetails