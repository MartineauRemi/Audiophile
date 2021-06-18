import React from 'react'
import {Link} from "react-router-dom"
import {useShoppingCartContext} from '../contexts/CartProvider'


export default function CheckoutModal({checkoutModalActive, closeCheckoutModal, grandTotal}) {
    const {setShoppingCart} = useShoppingCartContext()

    return (
        <div className={`checkout-modal ${checkoutModalActive? "checkout-modal--active" : ""}`}>
            <div className="checkout-modal__content">
                <h1>THANK YOU FOR YOUR ORDER</h1>
                <p>You will receive an email confirmation shortly.</p>
                <div className="checkout-modal__recap">
                    {/* <div className="checkout-modal__articles"></div> */}
                    <div className="checkout-modal__total">
                        <span>Grand Total</span>
                        <strong>{`$ ${grandTotal}`}</strong>
                    </div>
                </div>
                <Link
                    className="btn btn--type1"
                    to="/"
                    onClick={() => {
                        closeCheckoutModal();
                        setShoppingCart([])}}>
                            BACK TO HOME
                </Link>
            </div>
        </div>
    )
}
