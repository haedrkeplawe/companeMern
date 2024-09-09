import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import image_1 from "../image/dark_logo.png"
import image_2 from "../image/light_logo.png"
import { useContext, useEffect, useState } from 'react'
import URL from '../main_URL'
import { ProductContext } from '../ProductContext'

export const MainNavbar = ({ ismain }) => {
    const [open, setOpen] = useState(false)
    let totalPrice = 0
    let numberOdAdd = 0
    const [openCart, setOpenCart] = useState(false)
    const { products, setProducts } = useContext(ProductContext)
    const [loading, setLoading] = useState(false)
    const [iid, setId] = useState(0)

    const fetchProducts = async () => {
        const response = await fetch(URL + "product")
        const json = await response.json()
        setProducts(json)
        setLoading(false)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const removeFromCard = async (id) => {
        setId(id)
        setLoading(true)
        const response = await fetch(URL + "product", {
            method: 'PATCH',
            body: JSON.stringify({ id, addToCart: false, curentProduct: 0, numAdd: 0 }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            fetchProducts()
        }
    }

    return (
        <header>
            <div className={openCart ? 'shopping-cart' : "shopping-cart hidn"}>
                <div>
                    <div className='close'>
                        <h4>Shopping Cart</h4>
                        <FontAwesomeIcon
                            onClick={() => setOpenCart(false)}
                            icon={faClose} />
                    </div>
                    <div className='boxs'>
                        {products && products.map(product => {
                            if (product.addToCart) {
                                numberOdAdd += 1
                                totalPrice += product.numAdd * product.priceafter[product.curentProduct - 1]
                                return (
                                    <div key={product._id} className='box'>
                                        <div >
                                            <img src={URL + "uploads\\img\\" + `${product.image[product.curentProduct - 1]}` + ".jpg"} />
                                            <div className='info'>
                                                <h4>{product.type}</h4>
                                                <span>{product.numAdd} × ${product.priceafter[product.curentProduct - 1]}.00</span>
                                            </div>
                                        </div>
                                        {(loading && (product._id === iid)) && <div></div> ||
                                            <FontAwesomeIcon
                                                onClick={() => removeFromCard(product._id)}
                                                icon={faClose} />}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='end'>
                    <div className='subtotal'>
                        <h4>Subtotal:</h4>
                        <span>${totalPrice}.00</span>
                    </div>
                    <div className='buttons'>
                        <button>VIEW CARTCHECKOUT</button>
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
            <nav className={!ismain ? 'main_larg main' : 'main_larg '}>
                <div className='logo'>
                    <Link to="/"><img src={ismain ? image_1 : image_2} /></Link>
                </div>
                <div className='fillter'>
                    <Link to="/type?type=everything">EVERYTHING</Link>
                    <Link to="/type?type=Women">WOMEN</Link>
                    <Link to="/type?type=Men">MEN</Link>
                    <Link to="/type?type=Accessories">ACCESSORIES</Link>
                </div>
                <div className='pages'>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact-us">CONTACT US</Link>
                    <div>
                        <span
                            onClick={() => setOpenCart(true)}
                        >${totalPrice}.00</span>
                        <span className='shop' >
                            <p>{numberOdAdd}</p>
                            <FontAwesomeIcon icon={faShoppingCart}
                                onClick={() => setOpenCart(true)}
                            />
                        </span>
                        <span >
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                </div>

            </nav>
            <nav className='main_small' >
                <div className='logo'>
                    <Link to="/"><img src={image_2} /></Link>
                </div>
                <div className='pages'>
                    <span
                        onClick={() => setOpenCart(true)}
                    >${totalPrice}.00</span>
                    <span className='shop' >
                        <p>{numberOdAdd}</p>
                        <FontAwesomeIcon icon={faShoppingCart}
                            onClick={() => setOpenCart(true)}
                        />
                    </span>
                    <span >
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <span className='open'>
                        <FontAwesomeIcon
                            onClick={() => setOpen(true)}
                            icon={faBars} />
                    </span>
                </div>

            </nav>
            <div className={open ? "show" : "show hidn"}>
                <div className='close'>
                    <FontAwesomeIcon
                        onClick={() => setOpen(false)}
                        icon={faClose} />
                </div>
                <FontAwesomeIcon icon={faUser} />
                <div className='fillter'>
                    <Link to="/type?type=everything">EVERYTHING</Link>
                    <Link to="/type?type=Women">WOMEN</Link>
                    <Link to="/type?type=Men">MEN</Link>
                    <Link to="/type?type=Accessories">ACCESSORIES</Link>
                </div>
                <div className='fillter'>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact-us">CONTACT US</Link>
                </div>
            </div>
        </header>
    )
}

