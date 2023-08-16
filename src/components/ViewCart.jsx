import React from 'react'
import Cart from './Cart'
import NavbarComponent from './NavbarComponent'
import Subscribe from './Subscribe'
import TagDetails from './TagDetails'
import NestDetails from './NestDetails'

function ViewCart() {
  return (
    <div>
      <NavbarComponent/>
         <Cart/>
         <Subscribe/>
            <TagDetails/>
            <NestDetails/>
         

    </div>
  )
}

export default ViewCart