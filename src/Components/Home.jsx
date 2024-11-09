import React from 'react'
import LandingPage from './HomeComponent/LandingPage'
import About from './HomeComponent/About'
import Products from './HomeComponent/Products'
import Collections from './HomeComponent/Collections'
import Testimonial from './HomeComponent/Testimonial'
import Footer from './HomeComponent/Footer'

function Home() {
    return (
        <>
        <LandingPage />
        <About />
        <Products />
        <Collections />
        <Testimonial />
        <Footer />
        </>
    )
}

export default Home