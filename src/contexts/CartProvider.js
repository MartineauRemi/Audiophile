import React, {useContext} from 'react'
import useLocalStorage from "../hooks/useLocalStorage"

const ShoppingCartContext = React.createContext()
export function useShoppingCartContext(){return useContext(ShoppingCartContext)}

export default function CartProvider({children}) {
    const [shoppingCart, setShoppingCart] = useLocalStorage('shoppingCart', [])
    
    const containsItem = (product) => shoppingCart.filter(item => item.product.id === product.id).length === 1
    const addToCart = (product, quantity) => {
        if(quantity > 0){
            if(containsItem(product)){
                var newShoppingCart = shoppingCart.map(item =>
                    item.product.id === product.id ? 
                        {product: item.product, quantity: item.quantity + quantity}
                        : item)
                setShoppingCart(newShoppingCart)
            }else{
                setShoppingCart([
                    ...shoppingCart,
                    {product: product, quantity: quantity}
                ])
            }
        }
    }

    const removeOneInstanceFromCart = (product) => {
        var newShoppingCart = shoppingCart.map((item) =>{
            if(item.product.id === product.id){
                return item.quantity === 1?
                    null
                    : {product: item.product, quantity: item.quantity - 1}
            }else
                return item
        }).filter(item => item !== null)
        setShoppingCart(newShoppingCart)
    }
    
    return (
        <ShoppingCartContext.Provider value={{shoppingCart, setShoppingCart, addToCart, removeOneInstanceFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
