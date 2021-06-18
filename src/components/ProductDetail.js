import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link} from "react-router-dom"
import products from "../data/data.json"
import AboutUs from './AboutUs'
import Categories from './Categories'
import QuantityWidget from "./QuantityWidget"
import {useShoppingCartContext} from '../contexts/CartProvider'

export default function ProductDetail({match}) {
    var slug = match.params.slug
    var product = products.filter(product => product.slug === slug)[0]
    
    const {addToCart} = useShoppingCartContext()
    const [quantity, setQuantity] = useState(0)
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        setQuantity(0)
    }, [slug])



    return (
        <div className="product-detail">
            <section className="detail">
                <Link className="go-back" to={`/category/${product.category}`}>Go Back</Link> 
            
                <picture>
                    <source media="(min-width: 1440px)" srcSet={product.image.desktop} />
                    <source media="(min-width: 768px)" srcSet={product.image.tablet} />
                    <img src={product.image.mobile} />
                </picture>

                <div className="detail__text">
                    <div className="detail__overline">{product.new ? "NEW PRODUCT" : ""}</div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="detail__price">{`$ ${product.price}`}</div>
                    <div className="detail__cta">
                        <QuantityWidget product={product} quantity={quantity} setQuantity={setQuantity} updateCart={false}/>
                        <button
                            className="btn btn--type1"
                            onClick={() => addToCart(product, quantity)}>
                                ADD TO CART</button>
                    </div>
                </div>
            </section>
            
            <div className="infos-container">
                <div className="infos-container__content">
                <section className="features">
                    <h2>FEATURES</h2>
                    <p>
                        {product.features.split("\n").map(paraph => <span>{paraph}<br/></span>)}
                    </p>
                </section>

                <section className="in-the-box">
                    <h2>IN THE BOX</h2>
                    <ul>
                        {product.includes.map(item => {
                            return (
                                <li>
                                    <span>{`${item.quantity}x`}</span> {item.item}
                                </li>
                            )
                        })}
                    </ul>
                </section>
                </div>
            </div>

            <section className="gallery">
                <div className="gallery__content">
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={product.gallery.first.desktop} />
                        <source media="(min-width: 768px)" srcSet={product.gallery.first.tablet} />
                        <img src={product.gallery.first.mobile} />
                    </picture>
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={product.gallery.second.desktop} />
                        <source media="(min-width: 768px)" srcSet={product.gallery.second.tablet} />
                        <img src={product.gallery.second.mobile} />
                    </picture>
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={product.gallery.third.desktop} />
                        <source media="(min-width: 768px)" srcSet={product.gallery.third.tablet} />
                        <img src={product.gallery.third.mobile} />
                    </picture>
                </div>
            </section>

            <section className="suggestions">
                <h2>YOU MAY ALSO LIKE</h2>
                <ul>
                    {product.others.map((other, index) => {
                        return (
                            <li key={index}>
                                <picture>
                                    <source media="(min-width: 1440px)" srcSet={other.image.desktop} />
                                    <source media="(min-width: 768px)" srcSet={other.image.tablet} />
                                    <img src={other.image.mobile} />
                                </picture>
                                <h3>{other.name}</h3>
                                <Link className="btn btn--type1" to={`/product/${other.slug}`}>SEE PRODUCT</Link>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <Categories accessFromMenu={false}/>
            <AboutUs />
        </div>
    )
}
