import React from 'react'
import Hero from '../../components/ui/Hero'
import Product from '../../components/ui/Products'
import Blog from '../../components/ui/Blog'
import Contact from '../../components/ui/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <Product/>
            <Blog/>
            <Contact/>  
        </>
    )
}

export default Home
