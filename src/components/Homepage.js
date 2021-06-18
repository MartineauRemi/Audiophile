import React, {useLayoutEffect} from 'react'
import {Link} from "react-router-dom"
import Categories from "./Categories"
import AboutUs from "./AboutUs"

export default function Homepage() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

    return (
        <div className="homepage">
            <section className="homepage-hero">
              <div className="homepage-hero__content">
                <div className="overline">New product</div>
                <h1>XX99 Mark II Headphones</h1>
                <p>
                  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <Link className="btn btn--type1" to="/product/xx99-mark-two-headphones">See product</Link>
              </div>
            </section>

            <Categories />

            <section className="top-products">
              <div className="top-products__item top-products__item--zx9-speaker">
                <div className="top-products__item-img">
                </div>
                <div className="top-products__item-text">
                  <h2>ZX9 speaker</h2>
                  <p>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                  </p>
                  <Link to="/product/zx9-speaker" className="btn btn--type4">See product</Link>
                </div>
              </div>

              <div className="top-products__item top-products__item--zx7-speaker">
                <div className="top-products__item-img"></div>
                <div className="top-products__item-text">
                  <h2>ZX7 speaker</h2>
                  <Link className="btn btn--type2" to="/product/zx7-speaker">See product</Link>
                </div>
              </div>

              <div className="top-products__item top-products__item--yx1-earphones">
                <div className="top-products__item-img"></div>
                <div className="top-products__item-text">
                  <h2>YX1 earphones</h2>
                  <Link className="btn btn--type2" to="/product/yx1-earphones">See product</Link>
                </div>
              </div>
            </section>
            <AboutUs />
        </div>
    )
}
