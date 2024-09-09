import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { MainNavbar } from "../../components/MainNavbar"
import "./style.css"
import image_1 from "../../image/product_1.jpg"
import { useContext, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { Product } from '../../components/Product'
import URL from '../../main_URL'
import { ProductContext } from '../../ProductContext'

export const Type = () => {
    const type = useLocation().search.slice(6,)
    const { products, setProducts } = useContext(ProductContext)
    const [search, setSearch] = useState("")
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(500)
    if (+min > +max) {
        setMin(max)
        setMax(min)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(URL + "product")
            const json = await response.json()
            setProducts(json)

        }
        fetchProducts()
    }, [])



    useEffect(() => {
        setSearch("")
    }, [type])

    const handleSaearch = () => {
        setSearch("")
    }

    return (
        <>
            <MainNavbar />
            <div className="type-page">
                <div className="side-bar">
                    <div className="search">
                        <input
                            type="text"
                            placeholder='Search products...'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass}
                            onClick={() => handleSaearch()}
                        />
                    </div>
                    <div className="fillter">
                        <h4>Filter by Price</h4>
                        min
                        <input type='range' min="0" max="300"
                            onChange={e => {
                                setMin(e.target.value)
                            }}
                            value={min}
                        />
                        max
                        <input type='range' min="0" max="300"
                            value={max}
                            onChange={e => setMax(e.target.value)}
                        />
                        <div className='end'>
                            <button>Filter</button>
                            <span><p>Price: ${min} — ${max}</p></span>
                        </div>
                    </div>
                    <div className="categories">
                        <h4>Categories</h4>
                        <div className='type'>
                            <div>
                                <h5>Accessories</h5>
                                <h5>(7)</h5>
                            </div>
                            <div>
                                <h5>Men</h5>
                                <h5>(14)</h5>
                            </div>
                            <div>
                                <h5>Women</h5>
                                <h5>(17)</h5>
                            </div>
                        </div>
                    </div>
                    {/* <div className="best">
                        <h2>Our Best Sellers</h2>
                        <div className='boxs'>
                            <div className='box'>
                                <div className='image'>
                                    <img src={image_1} />
                                </div>
                                <div className='info'>
                                    <h2 className='type'>Boho Bangle Bracelet</h2>
                                    <div className='rate'>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className='price'>
                                        $150.00 – $170.00
                                    </p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='image'>
                                    <img src={image_1} />
                                </div>
                                <div className='info'>
                                    <h2 className='type'>Anchor Bracelet</h2>
                                    <div className='rate'>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className='price'>
                                        $170.00
                                    </p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='image'>
                                    <img src={image_1} />
                                </div>
                                <div className='info'>
                                    <h2 className='type'>Black Hoodie</h2>
                                    <div className='rate'>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className='price'>
                                        $150.00
                                    </p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='image'>
                                    <img src={image_1} />
                                </div>
                                <div className='info'>
                                    <h2 className='type'>Anchor Bracelet</h2>
                                    <div className='rate'>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className='price'>
                                        $200.00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="container">
                    <h3>Home / {type}</h3>
                    <h4>Showing 1–12 of 31 results</h4>
                    <div className='boxs'>
                        {products && products.map((product, mainindex) => {
                            if (product.type.toLowerCase().includes(search.toLowerCase())) {
                                if (type === "everything") {
                                    return (<Product key={product._id} comeFrom="type" product={product} mainindex={mainindex} />)
                                } else if (type === product.gen) {
                                    return (<Product key={product._id} comeFrom="type" product={product} mainindex={mainindex} />)
                                }

                            }
                        })}
                    </div>
                    {/* <div className='pages'>
                        <span className='active'>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div> */}
                </div>
            </div>
        </>
    )
}