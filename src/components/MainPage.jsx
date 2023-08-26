import React from 'react'

import CarouselItem from './Carsoual'
import NavbarComponent from './NavbarComponent'
import Categories from './Categories'
import ProductAdd from './ProductAdd'
import PopularProducts from './PopularProducts'
import BestSell from './BestSell'
import DealsoftheDay from './DealsoftheDay'
import ListInfo from './ListInfo'
import Subscribe from './Subscribe'
import TagDetails from './TagDetails'
import NestDetails from './NestDetails'


export default function MainPage() {
    return(
        <div>
            <NavbarComponent/>
            
            <CarouselItem/>
            <Categories/>
            <ProductAdd/>
            <PopularProducts/>
            <BestSell/>
            <DealsoftheDay/>
            <ListInfo/>
            <Subscribe/>
            <TagDetails/>
            <NestDetails/>
        </div>
    )
}