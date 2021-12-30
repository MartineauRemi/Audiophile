import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useShoppingCartContext} from '../contexts/CartProvider'
import ShoppingCartItem from './ShoppingCartItem'
import CheckoutModal from "./CheckoutModal"
import CheckoutFormInput from './CheckoutFormInput'


export default function Checkout() {
    const NAME_REGEX = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const PHONE_REGEX = /^0[0-9]([0-9]{2}){4}$/
    const ADDRESS_REGEX = /^[a-zA-Z0-999]+(\s[a-zA-Z\.\-,]+)+$/
    const ZIP_REGEX = /^[0-9]{5}$/
    const CITY_AND_COUNTRY_REGEX = /^[A-Z][a-zA-Z\-\s]+$/
    const E_MONEY_NB_REGEX = /^[0-9]{9}$/
    const E_MONEY_PIN_REGEX = /^[0-9]{4}$/

    const {shoppingCart} = useShoppingCartContext()

    const total = shoppingCart.reduce((acc, current) => acc + (current.quantity * current.product.price), 0)
    const shipping = 50
    const VAT =  parseInt(total - (100*total) / 120)
    const grandTotal = total + shipping

    
    

    const [paymentMethod, setPaymentMethod] = useState("e-Money")
    const [checkoutModalActive, setCheckoutModalActive] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [zip, setZip] = useState('')
    const [eMoneyNb, setEMoneyNb] = useState('')
    const [eMoneyPin, setEMoneyPin] = useState('')


    function closeCheckoutModal(){setCheckoutModalActive(false)}

    function checkName(name){return NAME_REGEX.test(name)}
    function checkEmail(email){return EMAIL_REGEX.test(email)}
    function checkPhone(phone){return PHONE_REGEX.test(phone)}
    function checkAddress(address){return ADDRESS_REGEX.test(address)}
    function checkZip(zip){return ZIP_REGEX.test(zip)}
    function checkCityAndCountry(value){return CITY_AND_COUNTRY_REGEX.test(value)}
    function checkEMoneyNumber(nb){return E_MONEY_NB_REGEX.test(nb)}
    function checkEMoneyPin(pin){return E_MONEY_PIN_REGEX.test(pin)}

    function formIsValid(){
        const paymentMethodValid = paymentMethod === "e-Money"? checkEMoneyNumber(eMoneyNb) && checkEMoneyPin(eMoneyPin) : true

        console.log(checkName(name) && checkEmail(email) && checkPhone(phone) &&
            checkAddress(address) && checkCityAndCountry(city) && checkCityAndCountry(country) &&
            checkZip(zip) && paymentMethodValid)
        return (
            checkName(name) && checkEmail(email) && checkPhone(phone) &&
            checkAddress(address) && checkCityAndCountry(city) && checkCityAndCountry(country) &&
            checkZip(zip) && paymentMethodValid
        )
    }


    return (
        <section className="checkout">
            <CheckoutModal
                    checkoutModalActive={checkoutModalActive}
                    closeCheckoutModal={closeCheckoutModal}
                    grandTotal={grandTotal}/>
            <div className="checkout__content">
                <form onSubmit={(e) => {
                        e.preventDefault()
                        if(formIsValid())
                            setCheckoutModalActive(true)
                    }}>
                    <div className="form">
                        <Link className="go-back" to="/Audiophile">Go Back</Link>
                        <h1>CHECKOUT</h1>
                        <h2>BILLING DETAILS</h2>
                        <fieldset className="checkout__billing-details">
                            <CheckoutFormInput
                                className="checkout__name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required={true}
                                checkMethod={checkName}
                                setValue={setName}
                            />
                            <CheckoutFormInput
                                className="checkout__email"
                                type="email"
                                name="email"
                                placeholder="john.doe@email.com"
                                required={true}
                                checkMethod={checkEmail}
                                setValue={setEmail}
                            />
                            <CheckoutFormInput
                                className="checkout__phone"
                                type="tel"
                                name="phone"
                                placeholder="0102030405"
                                required={true}
                                checkMethod={checkPhone}
                                setValue={setPhone}
                            />
                        </fieldset>

                        <h2>SHIPPING INFOS</h2>
                        <fieldset className="checkout__shipping-info">
                            <CheckoutFormInput
                                className="checkout__address"
                                type="text"
                                name="address"
                                placeholder="1137 Williams Avenue"
                                required={true}
                                checkMethod={checkAddress}
                                setValue={setAddress}
                            />
                            <div className="checkout__zip-and-city">
                                <CheckoutFormInput
                                    className="checkout__zip"
                                    type="text"
                                    name="zip-code"
                                    placeholder="10001"
                                    required={true}
                                    checkMethod={checkZip}
                                    setValue={setZip}
                                />
                                <CheckoutFormInput
                                    className="checkout__city"
                                    type="text"
                                    name="city"
                                    placeholder="New York"
                                    required={true}
                                    checkMethod={checkCityAndCountry}
                                    setValue={setCity}
                                />
                            </div>

                            <CheckoutFormInput
                                className="checkout__country"
                                type="text"
                                name="country"
                                placeholder="United States"
                                required={true}
                                checkMethod={checkCityAndCountry}
                                setValue={setCountry}
                            />
                        </fieldset>

                        <h2>PAYMENT DETAILS</h2>
                        <fieldset className="checkout__payment-details">
                            <div className="checkout__payment-method">
                                <label htmlFor="payment-method">Payment Method</label>
                                <div className="methods">
                                    <div className={`${paymentMethod === 'e-Money' ? "selected" : ""}`}>
                                        <input type="radio" checked={paymentMethod === "e-Money"}  id="e-money" value="e-Money" name="payment-method" onChange={(e) => setPaymentMethod(e.target.value)}/><label for="e-money">e-Money</label>
                                    </div>

                                    <div className={`${paymentMethod === 'cash-on-delivery' ? "selected" : ""}`}>
                                        <input type="radio" checked={paymentMethod === "cash-on-delivery"} id="cash-on-delivery" value="cash-on-delivery" name="payment-method" onChange={(e) => setPaymentMethod(e.target.value)}/><label for="cash-on-delivery">Cash on Delivery</label>
                                    </div>
                                </div>
                            </div>

                            {paymentMethod === "e-Money" ?  (
                                <div className="checkout__e-money-info">
                                    <CheckoutFormInput
                                        className="checkout__e-money-number"
                                        type="text"
                                        name="e-money-number"
                                        placeholder="238521993"
                                        required={true}
                                        checkMethod={checkEMoneyNumber}
                                        setValue={setEMoneyNb}
                                    />
                                    <CheckoutFormInput
                                        className="checkout__e-money-pin"
                                        type="text"
                                        name="e-money-pin"
                                        placeholder="6891"
                                        required={true}
                                        checkMethod={checkEMoneyPin}
                                        setValue={setEMoneyPin}
                                    />
                                </div>
                            )
                            :
                            (
                                <div className="checkout__cash-on-delivery-info">
                                    <p>
                                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.
                                         Just make sure your address is correct so that your order will not be cancelled.
                                    </p>
                                </div>
                            )}
                        </fieldset>
                    </div>

                    <div className="summary">
                        <h2>SUMMARY</h2>
                        <ul>
                            {shoppingCart.map(item => <ShoppingCartItem item={item} quantityModifActivated={false}/>)}
                        </ul>
                        <div className="summary__total"><span>TOTAL</span><strong>{`$ ${total}`}</strong></div>
                        <div className="summary__shipping"><span>SHIPPING</span><strong>{`$ ${shipping}`}</strong></div>
                        <div className="summary__vat"><span>VAT (INCLUDED)</span><strong>{`$ ${VAT}`}</strong></div>
                        <div className="summary__grand-total"><span>GRAND TOTAL</span><strong>{`$ ${grandTotal}`}</strong></div>
                        {shoppingCart.length > 0 ? (<input className="btn btn--type1" type="submit" value="Continue &amp; Pay"/>) : <strong>Your cart is empty.</strong>}
                    </div>
                </form>
                            
            </div>
        </section>
    )
}
