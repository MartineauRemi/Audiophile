import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from "./FacebookIcon"
import TwitterIcon from "./TwitterIcon"
import InstagramIcon from "./InstagramIcon"

export default function Footer() {
    return (
        <footer className="footer">
    <Link to="/" className="footer__logo-container"><div className="logo footer__logo"></div></Link>
    <p className="footer__text">
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
      and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
      visit our demo facility - we’re open 7 days a week.
    </p>
    <ul className="footer__links">
      <li className="footer__link"><Link to="/">Home</Link></li>
      <li className="footer__link"><Link to="/category/headphones">Headphones</Link></li>
      <li className="footer__link"><Link to="/category/speakers">Speakers</Link></li>
      <li className="footer__link"><Link to="/category/earphones">Earphones</Link></li>
    </ul>

    <p className="footer__copyrights">
      Copyright 2021. All Rights Reserved
    </p>

    <ul className="footer__social-medias">
      <li>
      <FacebookIcon className="social-media footer__social-media" />
      </li>

      <li>
        <TwitterIcon className="social-media footer__social-media"/>
      </li>

      <li>
        <InstagramIcon className="social-media footer__social-media" />
      </li>
    </ul>
  </footer>
    )
}
