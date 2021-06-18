import React, {useState, useEffect} from 'react'
import QuantityWidget from './QuantityWidget'
import {useShoppingCartContext} from '../contexts/CartProvider'


export default function ShoppingCartItem({item, quantityModifActivated}) {
    const product = item.product
    const [quantity, setQuantity] = useState(item.quantity)
    const {shoppingCart} = useShoppingCartContext()

    useEffect(() => {

    }, [shoppingCart, quantity])


    return (
        <li className="shopping-cart-item">
            <img
                src={item.product.image.mobile}
                width="64px"
                height="64px"
                alt={product.slug} />
            <div className="shopping-cart-item__text">
                <span className="shopping-cart-item__name">{product.name.replace(/\s(Headphones)|(Earphones)|(Speakers)/, "")}</span>
                <span>{`$ ${product.price}`}</span>
            </div>

            {quantityModifActivated?
                (<QuantityWidget product={product} quantity={item.quantity} setQuantity={setQuantity} updateCart={true}/>)
                :
                (<span>{`x${item.quantity}`}</span>)}
            
        </li>
    )
}