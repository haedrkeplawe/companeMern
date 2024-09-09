import "./index.css"

export const CreateProduct = () => {
    return (
        <div className="create-product">
            <h2>Add Product</h2>
            <form className="create-product">
                <input type="number" placeholder="num_product"
                />
                <input type="text" placeholder="num_product"
                />
                <button style={{ marginTop: '5px' }}>Create post</button>
            </form>
        </div>
    )
}