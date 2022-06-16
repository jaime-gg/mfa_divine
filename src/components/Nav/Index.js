import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Nav = () => {

    return (
        <header className="wrapper row">
            <nav id="navbar" className="nav-menu navbar1">
                <ul className="justify-content-center">
                    <li>
                        <Link to="/#gallery">
                            View Our Online Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/checkout">
                            Order A Ticket
                        </Link>
                    </li>
                    <li>
                        <Link to="/donate">
                            Make A Donation
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Nav;