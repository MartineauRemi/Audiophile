import React from 'react'
import {useShoppingCartContext} from '../contexts/CartProvider'

export default function QuantityWidget({product, quantity, setQuantity, updateCart}) {

    const {addToCart, removeOneInstanceFromCart} = useShoppingCartContext()
    
    return (
        <div className="quantity__container">
            <button
                className="quantity__less-btn"
                onClick={() => {
                    setQuantity(quantity === 0? 0 : quantity - 1);
                    if(updateCart){
                        removeOneInstanceFromCart(product, quantity)
                    }
                }}>
                    -
            </button>
            <span>{quantity}</span>
            <button
                className="quantity__more-btn"
                onClick={() => {
                    setQuantity(quantity < 20? quantity + 1 : quantity)
                    if(updateCart)
                        addToCart(product, 1)
                }}>
                    +
            </button>
        </div>
    )
}
