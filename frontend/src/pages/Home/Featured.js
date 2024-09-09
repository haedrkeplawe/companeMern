import { useContext, useEffect } from 'react'
import { Product } from '../../components/Product'
import { ProductContext } from '../../ProductContext'
import URL from '../../main_URL'

export const Featured = () => {
    const { products, setProducts, ready, setReady } = useContext(ProductContext)

    useEffect(() => {
        const fetchProducts = async () => {
            setReady(false)
            const response = await fetch(URL + "product")
            const json = await response.json()
            setProducts(json)
            setReady(true)
        }
        fetchProducts()
    }, [])

    return (
        <div className="featured">
            <div className='head'>
                <h1>Featured Products</h1>
            </div>
            {!ready && <div className='loading'>loading...</div> ||
                <div className='boxs'>
                    {products && products.map((product, mainindex) => (
                        <Product comeFrom={"main"} key={product._id} product={product} mainindex={mainindex} />
                    ))}
                </div>
            }
        </div >
    )
}