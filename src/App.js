import React, {useState} from "react";
import "./styles/sass/styles.scss";
import {BrowserRouter, Route} from "react-router-dom";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Category from "./components/Category";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [shoppingCartActive, setShoppingCartActive] = useState(false)
  const [checkoutModalActive, setCheckoutModalActive] = useState(false)

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">

          {/* set up the router */}
          <Route exact path="/" component={Homepage} />
          <Route path="/category/:slug" component={Category} />
          <Route path="/product/:slug" component={ProductDetail} />
          <Route path="/checkout" component={Checkout} />

          <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>
          <ShoppingCart
            shoppingCartActive={shoppingCartActive}
            setShoppingCartActive={setShoppingCartActive}
            setCheckoutModalActive={setCheckoutModalActive}/>
          <Header
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            shoppingCartActive={shoppingCartActive}
            setShoppingCartActive={setShoppingCartActive}/>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
