import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <header className="wrapper row">
            <div className="logo px-4 py-3">

                <Link to="/">
                    <h1>TDF</h1>
                </Link>
            </div>

            <nav id="navbar" className="nav-menu navbar1">
                <ul className="under">
                    <li>
                        <a href="#gallery">
                            View Our Online Gallery
                        </a>
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