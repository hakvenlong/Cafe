import React from 'react'
import Header from '../../components/common/Header'
import Hero from '../../components/ui/Hero'
import Product from '../../features/products/product'
import Testimonial from '../../components/ui/Testimonial'
import Blog from '../../components/ui/Blog'
import Contact from '../../components/ui/Contact'
import Footer from '../../components/common/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Product/>
            <Blog/>
            {/* <Testimonial/> */}
            <Contact/>  
        </>
    )
}

export default Home
