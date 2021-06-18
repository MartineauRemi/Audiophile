import React, {useLayoutEffect} from "react"
import AboutUs from "./AboutUs"
import Categories from "./Categories"
import ProductsList from "./ProductsList"

export default function Category({match}) {
    var params = match.params

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="category">
            <div className="category__heading">
                <h1>{params.slug}</h1>
            </div>
            <ProductsList category={params.slug} />
            <Categories />
            <AboutUs />  
        </div>
    )
}
