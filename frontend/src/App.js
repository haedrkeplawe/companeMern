import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"
import "./App.css"
import { Home } from "./pages/Home"
import { SingleProduct } from "./pages/SingleProduct"
import { Type } from "./pages/Type"
import { About } from "./pages/About"
import { ContactUs } from "./pages/ContactUs"
import { ProductContextProvider } from "./ProductContext";
import { CreateProduct } from "./pages/CreateProduct"

function App() {
  return (
    <>
      <div className="App">
        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single_product" element={<SingleProduct />} />
            <Route path="/type" element={<Type />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/create" element={<CreateProduct />} />
          </Routes>
          <Footer />
        </ProductContextProvider>
      </div>
    </>
  );
}

export default App;
