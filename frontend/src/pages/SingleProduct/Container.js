export const Container = ({ id, setProducts, product, numAdd, setNumAdd, loading, setLoading, curentProduct, setCurentProduct, URL }) => {
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

    const addToCart = async (e,) => {
        setLoading(true)
        const response = await fetch(URL + "product", {
            method: 'PATCH',
            body: JSON.stringify({ id, addToCart: true, curentProduct, numAdd }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setLoading(false)
        if (response.ok) {
            const responseAll = await fetch(URL + "product")
            const json = await responseAll.json()
            setProducts(json)
        }
    }

    return (
        <div className="container">
            <div className="image">
                {product.image && product.image.map((img, index) => {
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
                <p className="to">Home / {product.gen} / {product.type}</p>
                <p className="gen">{product.gen}</p>
                <h2 className="type">{product.type}s</h2>
                <div className='price' id={`1`}>
                    <span className='after'>
                        ${product.priceafter && (product.priceafter.length > 1 ? `${product.priceafter[0]}.00 - $${product.priceafter[product.priceafter.length - 1]}` : product.priceafter[0])}.00
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
                    {product.priceafter && product.priceafter.length > 1 ? product.priceafter.map((price, index) => {
                        return (
                            <div key={index} className={index !== 0 ? "" : 'active'} id={1} data-type={`${index + 1}`}
                                onClick={() => handelShow(1, `${index + 1}`, product.priceafter[index])}>
                                <span style={{ background: `${product.imagecolor[index]}` }}></span>
                            </div>
                        )
                    })
                        : ""}
                </div>
                <span className="cleare"
                    onClick={() => setNumAdd(0)}
                >Cleare</span>
                <h2 className="main-price"> <span>${product.priceafter && (product.priceafter[0])}.00</span></h2>
                <div className="add">
                    <input type="number"
                        value={numAdd}
                        onChange={e => e.target.value > 0 ? setNumAdd(e.target.value) : setNumAdd(0)}
                    />
                    {product.num_product === 0 && <button style={{ background: "#788893", pointerEvents: "none" }}>Sold out !</button> ||
                        <button style={loading ? { background: "#788893", pointerEvents: "none" } : {}}
                            onClick={(e) => addToCart(e,)}
                        > {loading ? "Adding..." : "ADD TO CART"}</button>
                    }

                </div>
            </div>
        </div>
    )
}