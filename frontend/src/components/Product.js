import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import URL from '../main_URL'

export const Product = ({ comeFrom, product, mainindex }) => {

    const handelShow = (id, type, price) => {
        let clicks
        let images
        let pricesdev

        if (comeFrom === "type") {
            clicks = document.querySelectorAll(".type-page .boxs .box .fillter>div")
            images = document.querySelectorAll(".type-page .boxs  .box img")
            pricesdev = document.querySelectorAll(".type-page .boxs  .box .price")
        } else {
            clicks = document.querySelectorAll(".landing_page .featured .box .fillter>div")
            images = document.querySelectorAll(".landing_page .featured .boxs .box img")
            pricesdev = document.querySelectorAll(".landing_page .featured .box .price")
        }

        clicks.forEach(click => {
            if (+click.id === +id) {
                click.className = ""
                if (click.dataset.type === type) {
                    click.className = "active"
                }
            }
            images.forEach(image => {
                if (+image.id === +id) {
                    image.style.display = "none"
                    if (image.dataset.type === type) {
                        image.style.display = "block"
                    }
                }
            });
            pricesdev.forEach(pricedev => {
                if (+pricedev.id === +id) {
                    pricedev.innerHTML = `<span className='after'>$${price}.00</span>`
                }
            });
        });
    }


    return (
        <div className={product.num_product <= 0 ? "box sale" : "box "}>
            <div className='image'>
                <span>sale!</span>
                {product.image.map((img, index) => {
                    return (
                        <Link key={index} to={"/single_product/?id=" + product._id}>
                            <img
                                id={`${mainindex}`}
                                data-type={`${index + 1}`}
                                className={index === 0 ? " " : 'hidn'}
                                src={URL + "uploads\\img\\" + `${img}` + ".jpg"} />
                        </Link>
                    )
                })}
                <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className='type'>
                <h3>{product.type}</h3>
            </div>
            <div className='gen'>
                <span>{product.gen}</span>
            </div>
            <div className='price' id={`${mainindex}`}>
                {product.pricebefore > 0 && <span className='before'>{"$" + product.pricebefore + ".00"}</span>}
                <span className='after'>
                    ${product.priceafter.length > 1 ? `${product.priceafter[0]}.00 - $${product.priceafter[product.priceafter.length - 1]}` : product.priceafter[0]}.00
                </span>
            </div>
            <div className='fillter'>
                {product.priceafter.length > 1 ? product.priceafter.map((price, index) => {
                    return (
                        <div key={index} className={index !== 0 ? "" : 'active'} id={mainindex} data-type={`${index + 1}`}
                            onClick={() => handelShow(mainindex, `${index + 1}`, product.priceafter[index])}>
                            <span style={{ background: `${product.imagecolor[index]}` }}></span>
                        </div>
                    )
                })
                    : ""}
            </div>
            <div className='rate'>
                <div className={product.rate / product.numRate > 0 ? "avtive" : ""}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={product.rate / product.numRate > 1 ? "avtive" : ""}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={product.rate / product.numRate > 2 ? "avtive" : ""}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={product.rate / product.numRate > 3 ? "avtive" : ""}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={product.rate / product.numRate > 4 ? "avtive" : ""}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
    )
} 