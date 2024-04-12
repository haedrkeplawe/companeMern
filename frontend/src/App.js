import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"
import "./App.css"
import { Home } from "./pages/Home"
import { SingleProduct } from "./pages/SingleProduct"
import { Type } from "./pages/Type"
import { About } from "./pages/About"
import { ContactUs } from "./pages/ContactUs"

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single_product" element={<SingleProduct />} />
            <Route path="/type" element={<Type />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
