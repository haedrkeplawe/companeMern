import { MainNavbar } from "../../components/MainNavbar"
import "./style.css"
import { useLocation, } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import URL from '../../main_URL'
import { ProductContext } from "../../ProductContext"
import { Container } from "./Container"
import { More } from "./More"

export const SingleProduct = () => {

    const id = useLocation().search.slice(4,)
    const { setProducts, ready, setReady } = useContext(ProductContext)
    const [product, setProduct] = useState([])
    const [numAdd, setNumAdd] = useState(1)
    const [curentProduct, setCurentProduct] = useState(1)
    const [loading, setLoading] = useState(false)
    const [rate, setRate] = useState(0)

    useEffect(() => {
        const fetchProduct = async () => {
            setReady(false)
            const response = await fetch(URL + "product/single?id=" + id)
            const json = await response.json()
            setProduct(json)
            setReady(true)
        }
        fetchProduct()
    }, [])


    const sendReview = async (e,) => {
        setRate(++product.numRate)
        const response = await fetch(URL + "product", {
            method: 'PATCH',
            body: JSON.stringify({ id, rate: product.rate + rate, numRate: product.numRate }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            setRate(0)
        }
    }
    return (
        <>
            <MainNavbar />
            <div className="product-page">
                {!ready && <div className='loading'>loading...</div> ||
                    <div className="main">
                        <Container id={id} product={product} setProducts={setProducts} setNumAdd={setNumAdd}
                            numAdd={numAdd} loading={loading} setLoading={setLoading}
                            curentProduct={curentProduct} setCurentProduct={setCurentProduct} URL={URL}

                        />
                        <More product={product} rate={rate} setRate={setRate} sendReview={sendReview} />
                    </div>
                }

            </div>
        </>
    )
}