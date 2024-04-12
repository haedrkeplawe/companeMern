import { MainNavbar } from "../../components/MainNavbar"
import "./style.css"
import { useLocation, Navigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import URL from '../../main_URL'

export const SingleProduct = () => {
    const handelShow = (id, type, price) => {
        let clicks = document.querySelectorAll(".product-page .main .fillter>div")
        let images = document.querySelectorAll(".product-page .main img")
        let pricesdev = document.querySelector(".product-page .main-price span")
        pricesdev.innerHTML = `$${price}.00`
        clicks.forEach(click => {
            if (+click.id === +id) {
                click.className = ""
                if (click.dataset.type === type) {
                    click.className = "active"
                }
            }
            images.forEach(image => {
                image.className = "hidn"
                if (+image.dataset.type === +type) {
                    setCurentProduct(type)
                    image.className = ""
                }
            });
        });
    }

    const id = useLocation().search.slice(4,)
    const [products, setProducts] = useState([])
    const [numAdd, setNumAdd] = useState(1)
    const [curentProduct, setCurentProduct] = useState(1)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(URL + "product/single?id=" + id)
            const json = await response.json()
            setProducts(json)
        }
        fetchProducts()
    }, [])

    const addToCart = async (e,) => {
        console.log();
        const response = await fetch(URL + "product", {
            method: 'PATCH',
            body: JSON.stringify({ id, addToCart: true, curentProduct, numAdd }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    return (
        <>
            <MainNavbar />
            <div className="product-page">
                <div className="main">
                    <div className="container">
                        <div className="image">
                            {products.image && products.image.map((img, index) => {
                                return (
                                    <img
                                        key={index}
                                        id={`1`}
                                        data-type={`${index + 1}`}
                                        className={index === 0 ? " " : 'hidn'}
                                        src={URL + "uploads\\img\\" + `${img}` + ".jpg"} />
                                )
                            })}
                        </div>
                        <div className="info">
                            <p className="to">Home / {products.gen} / {products.type}</p>
                            <p className="gen">{products.gen}</p>
                            <h2 className="type">{products.type}s</h2>
                            <div className='price' id={`1`}>
                                {products.pricebefore && <span className='before'>{"$" + products.pricebefore + ".00"}</span>}
                                <span className='after'>
                                    ${products.priceafter && (products.priceafter.length > 1 ? `${products.priceafter[0]}.00 - $${products.priceafter[products.priceafter.length - 1]}` : products.priceafter[0])}.00
                                </span>
                            </div>
                            <p className="about">
                                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                                non mauris vitae erat consequat auctor eu in elit. Class aptent taciti
                                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Mauris in erat justo. Nullam ac
                                urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
                            </p>
                            <div className='fillter'>
                                {products.priceafter && products.priceafter.length > 1 ? products.priceafter.map((price, index) => {
                                    return (
                                        <div key={index} className={index !== 0 ? "" : 'active'} id={1} data-type={`${index + 1}`}
                                            onClick={() => handelShow(1, `${index + 1}`, products.priceafter[index])}>
                                            <span style={{ background: `${products.imagecolor[index]}` }}></span>
                                        </div>
                                    )
                                })
                                    : ""}
                            </div>
                            <span className="cleare"
                                onClick={() => setNumAdd(0)}
                            >Cleare</span>
                            <h2 className="main-price"> <span>${products.priceafter && (products.priceafter[0])}.00</span></h2>
                            <div className="add">
                                <input type="number"
                                    value={numAdd}
                                    onChange={e => e.target.value > 0 ? setNumAdd(e.target.value) : setNumAdd(0)}
                                />
                                <button
                                    onClick={(e) => addToCart(e,)}
                                >ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}