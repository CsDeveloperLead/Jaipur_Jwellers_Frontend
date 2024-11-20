import { useEffect, useState } from 'react'
import LandingPage from './HomeComponents/LandingPage'
import About from './HomeComponents/About'
import Products from './HomeComponents/Products'
import Collections from './HomeComponents/Collections'
import Testimonial from './HomeComponents/Testimonial'
import axios from 'axios'

const backend = import.meta.env.VITE_BACKEND_URL

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await axios.get(`${backend}/api/v1/products/get-all-products?page=${1}&limit=${6}`)
            if (response.status === 200) {
                setProducts(response.data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log("error while fetching products", error);
            setLoading(true)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <LandingPage />
            <About data={products} />
            <Products data={products} />
            <Collections data={products} />
            <Testimonial />
        </>
    )
}

export default Home