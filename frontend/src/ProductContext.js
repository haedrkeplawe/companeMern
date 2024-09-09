import { createContext, useEffect, useState } from "react";
import URL from "./main_URL";

export const ProductContext = createContext({})

export function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([])
    const [ready, setReady] = useState()

    return (
        <ProductContext.Provider value={{ products, setProducts, ready, setReady }}>
            {children}
        </ProductContext.Provider>
    )
}