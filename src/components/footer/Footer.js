import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.styles.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {

    return(
        <div className='footContainer'>
            <div className='footContainer__cell'>
                <Link to="/" className="header__content__logo">
                    PUFI °
                </Link>
            </div>

            <div className='footContainer__cell'>
                <ul>
                    <li>
                        <Link to="/page1">
                            PUFI PUFF
                        </Link>
                    </li>
                    <li>
                        <Link to="/page2">
                            PUFFI RAIN
                        </Link>
                    </li>
                    <li>
                        <Link to="/page3">
                            PUFFI CART
                        </Link>
                    </li>
                    <li>
                        <Link to="/page4">
                            PUFI NAP
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='footContainer__cell'>

                <ul>
                    <li>
                        <Link to="/">
                            CONTACTO
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            AYUDA
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            COMO COMPRAR
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            TÉRMINOS Y CONDICIONES
                        </Link>
                    </li>
                </ul>

            </div>
            <div className='footContainer__cell'>

                <ul>
                    <li>
                        <Link to="/">
                            COMPRA 100% SEGURA
                        </Link>
                    </li>
                    <li>
                        <img width="100px" src='https://hoopson.com.br/wp-content/uploads/2022/06/compra-segura-1150x248-1.png'/>
                    </li>
                </ul>

            </div>
            <div className='footContainer__cell'>
            <ul>
                    <li>
                        <Link to="/">
                            SIGUENOS EN:
                        </Link>
                    </li>
            </ul>
            <div className='socialNetworks'>
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
            </div>
        </div>
    )

}

export default Footer;