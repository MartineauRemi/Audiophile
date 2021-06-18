import React from 'react'
import {Link} from "react-router-dom";

export default function Categories({setMenuActive, accessFromMenu}) {
    return (
      <section className="categories">
        <ul className="categories__list">
          <li className="categories__item" onClick={() => {if(accessFromMenu) setMenuActive(false)}}>
            <Link to="/category/headphones">
              <div className="categories__item-img categories__item-img--headphones"></div>
              <h3>Headphones</h3>
              <button className="btn btn--type3">Shop <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="icon-arrow-right"/></button>
            </Link>
          </li>

          <li className="categories__item" onClick={() => {if(accessFromMenu) setMenuActive(false)}}>
            <Link to="/category/speakers">
              <div className="categories__item-img categories__item-img--speakers"></div>
              <h3>Speakers</h3>
              <button className="btn btn--type3">Shop <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="icon-arrow-right"/></button>
            </Link>
          </li>

          <li className="categories__item" onClick={() => {if(accessFromMenu) setMenuActive(false)}}>
            <Link to="/category/earphones">
              <div className="categories__item-img categories__item-img--earphones"></div>
              <h3>Earphones</h3>
              <button className="btn btn--type3">Shop <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="icon-arrow-right"/></button>
            </Link>
          </li>
        </ul>
      </section>
    )
}
