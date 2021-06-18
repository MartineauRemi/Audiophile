import React from 'react'
import {Link} from "react-router-dom"

export default function ProductPreview({product, side}) {
    const urlBase = "/assets/category-" + product.category
            
    return (
        <div className={`product-preview product-preview--${side}`}>
            <picture>
                <source media="(min-width: 1440px)" srcSet={urlBase + "/desktop/image-" + product.slug +".jpg"} />
                <source media="(min-width: 768px)" srcSet={urlBase + "/tablet/image-" + product.slug +".jpg"} />
                <img src={urlBase + "/mobile/image-" + product.slug +".jpg"} />
            </picture>
            <div className="product-preview__text">
                <div className="product-preview__overline">{product.new ? "NEW PRODUCT" : ""}</div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link className="btn btn--type1" to={`/product/${product.slug}`}>See product</Link>
            </div>
        </div>
    )
}
