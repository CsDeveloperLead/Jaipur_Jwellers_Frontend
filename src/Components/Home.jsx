import React from 'react'
import LandingPage from './HomeComponents/LandingPage'
import About from './HomeComponents/About'
import Products from './HomeComponents/Products'
import Collections from './HomeComponents/Collections'
import Testimonial from './HomeComponents/Testimonial'

function Home() {
    return (
        <>
        <LandingPage />
        <About />
        <Products />
        <Collections />
        <Testimonial />
        </>
    )
}

export default Home