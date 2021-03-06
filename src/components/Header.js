import React from 'react'
import {Link} from "react-router-dom"

export default function Header({menuActive, setMenuActive, shoppingCartActive, setShoppingCartActive}) {
    function onClickHamburgerIcon(){setMenuActive(!menuActive)}
    return (
        <header className="header">
            <div id="hamburger" className="header__hamburger" onClick={() => onClickHamburgerIcon()}></div>
            <Link to="/Audiophile" className="header__logo-container"><div className="logo header__logo"></div></Link>
            <nav className="header__menu">
              <ul className="header__links">
                <li className="header__link"><Link to="/Audiophile">Home</Link></li>
                <li className="header__link"><Link to="/Audiophile/category/headphones">Headphones</Link></li>
                <li className="header__link"><Link to="/Audiophile/category/speakers">Speakers</Link></li>
                <li className="header__link"><Link to="/Audiophile/category/earphones">Earphones</Link></li>
              </ul>
            </nav>
            <button
              className="header__cart-btn"
              onClick={() => setShoppingCartActive(!shoppingCartActive)}></button>
        </header>
    )
}
