import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../images/logo.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import "../css/NavbarComponents.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { Badge, ThemeProvider, createTheme } from '@mui/material';
import { connect } from 'react-redux';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import CartPopup from './CartPopup';
import { makeStyles } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          maxWidth: 300, // Set your desired width here
        },
      },
    },
  },
});

function NavbarComponent(props) {
  const pages = ['Home', 'Blog', 'shop', 'Mega menu', 'Pages', 'Deals', 'About', 'Contact'];
  const heading = []
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleOpenNavMenu = (event) => {
    console.log("currenttarget", event.currentTarget)
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  // const dataDiv = <CartPopup/>
  return (

    <AppBar color='' position="absolute">
      {/* <Container maxWidth="xl"> */}
      <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }} disableGutters>
        <Box p={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* <div className='d-flex flex-row position-relative' > */}
        {/* <Box display="flex" flexDirection="row" sx={{
              display: { xs: 'none', md: 'block' },
            }}> */}
        <FormControl sx={{ m: 1, width: '25ch', display: { xs: 'none', md: 'block' } }} variant="standard">
          <InputLabel htmlFor="standard-adornment-text">Search for Products</InputLabel>
          <Input
            id="standard-adornment-text"
            type={'text'}
            endAdornment={
              <InputAdornment position="end">
                <SearchOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        {/* </Box> */}
        {/* </div> */}
        <img src={logo} className='nestlogo' />
        <Box display="flex" className="textcolor">

          <Box p={1} display="flex" flexDirection="row" >
            <LoopOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <span className='d-none d-lg-flex'> Compare</span>
          </Box>


          <Box p={1} display="flex" flexDirection="row" >
            <FavoriteBorderOutlinedIcon />
            <span className='d-none d-lg-flex'> WishList</span>
          </Box>


          <Box p={1} display="flex" flexDirection="row" >
            <IconButton onClick={handleClickOpen}>

              <Badge badgeContent={props.cartDetails.length} color="success">

                <ShoppingCartOutlinedIcon />

              </Badge>
            </IconButton>

            <span className='d-none d-lg-flex'>
              Cart
            </span>
            <CartPopup

              open={open}
              onClose={handleClose}
            />
          </Box>


          <Box p={1} display="flex" flexDirection="row" >
            <PermIdentityOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <span className='d-none d-lg-flex'>
              Log In
            </span>
          </Box>
        </Box>


      </Toolbar>
      <Box flexDirection={"row"} justifyContent={"center"} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Box>
      {/* </Container> */}

    </AppBar>
  )
}

const mapStateToProps = (popularReducer) => {
  console.log("Navbar Comp", popularReducer.selectedItems.selectedItems)
  return {
    cartDetails: popularReducer.selectedItems.selectedItems
  }
}


export default connect(mapStateToProps, null)(NavbarComponent)