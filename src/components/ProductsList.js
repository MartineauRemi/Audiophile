import React from 'react'
import products from "../data/data.json"
import ProductPreview from './ProductPreview'

export default function ProductsList({category}) {
    const productsList = products.filter(product => product.category === category)
    return (
        <div className="products-list">
            <ul>
                {productsList.map((product, index) => <li><ProductPreview product={product} side={index % 2 === 0? "left" : "right"} /></li>)}
            </ul>
        </div>
    )
}
