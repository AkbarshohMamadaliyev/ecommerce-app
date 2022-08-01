import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import {Routes, Route} from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
      <>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<ProductInfo/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </>
  );
}

export default App;
