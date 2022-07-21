import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FaCouch, FaUmbrella, FaShoppingCart, FaArtstation, FaBars } from "react-icons/fa";

import "./Header.styles.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate("/page1");
    };

    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__content__logo">
                    PUFI °
                </Link>
                <nav
                    className={`header__content__nav ${
                        menuOpen && size.width < 768 ? 'isMenu' : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/page1" onClick={menuToggleHandler}>
                                PUFI PUFF
                            </Link>
                            <FaCouch/>
                        </li>
                        <li>
                            <Link to="/page2" onClick={menuToggleHandler}>
                                PUFFI RAIN
                            </Link>
                            <FaUmbrella/>
                        </li>
                        <li>
                            <Link to="/page3" onClick={menuToggleHandler}>
                                PUFFI CART
                            </Link>
                            <FaShoppingCart/>
                        </li>
                        <li>
                            <Link to="/page4" onClick={menuToggleHandler}>
                                PUFI NAP
                            </Link>
                            <FaArtstation/>
                        </li>
                    </ul>
                </nav>
                <h6 onClick={ctaClickHandler}>Mi Cuenta | Mi Compra</h6>
                <div className="header__content__toggle">
                    {!menuOpen ? (
                        <FaBars onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;