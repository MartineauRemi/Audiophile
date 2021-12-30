import React,{useEffect, useRef} from 'react'
import {Link} from "react-router-dom"

import {useShoppingCartContext} from '../contexts/CartProvider'
import useClickOutside from '../hooks/useClickOutside'
import ShoppingCartItem from './ShoppingCartItem'

export default function ShoppingCart({shoppingCartActive, setShoppingCartActive, setCheckoutModalActive}) {
    const {shoppingCart, setShoppingCart} = useShoppingCartContext()
    var totalItems = shoppingCart.reduce((acc, current) => acc + current.quantity, 0)
    const cartRef = useRef()
    useEffect(() => {
         
    }, [shoppingCart])

    useClickOutside(cartRef, () => {
        if(shoppingCartActive)
            setShoppingCartActive(false)
    })

    return (
        <div className={`shopping-cart ${shoppingCartActive? "shopping-cart--active" : ""}`}>
            <div ref={cartRef} className="shopping-cart__content">
                <div className="shopping-cart__top-part">
                    <div className="shopping-cart__nb-and-remove-all">
                        <h2>{`CART (${totalItems})`}</h2>
                        <button className="btn" onClick={() => setShoppingCart([])}>Remove all</button>
                    </div>

                    <ul>
                        {shoppingCart.map(item => <ShoppingCartItem item={item} quantityModifActivated={true}/>)}
                    </ul>
                </div>

                <div className="shopping-cart__bottom-part">
                    <div className="shopping-cart__total">
                        <span>TOTAL</span>
                        <span><strong>{`$ ${shoppingCart.reduce((acc, current) => acc + (current.quantity * current.product.price), 0)}`}</strong></span>
                    </div>

                    <Link
                        className="btn btn--type1"
                        to="/Audiophile/checkout"
                        onClick={() => {
                            setShoppingCartActive(false);
                            if(shoppingCart.length > 0)
                                setCheckoutModalActive(true)}}
                        >
                            CHECKOUT
                    </Link>
                </div>
            </div>
        </div>
    )
}
