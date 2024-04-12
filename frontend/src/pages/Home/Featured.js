import { useEffect, useState } from 'react'
import { Product } from '../../components/Product'
import URL from '../../main_URL'

export const Featured = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(URL + "product")
            const json = await response.json()
            setProducts(json)
        }
        fetchProducts()
    }, [])
    return (
        <div className="featured">
            <div className='head'>
                <h1>Featured Products</h1>
            </div>
            <div className='boxs'>
                {products && products.map((product, mainindex) => (
                    <Product comeFrom={"main"} key={product._id} product={product} mainindex={mainindex} />
                ))}
            </div>
        </div >
    )
}