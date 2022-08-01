import React from 'react';
import {Link} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import CartBtn from "./CartBtn";

function Header() {
    return (
        <div className="header-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold fs-3">OnlineShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <Login/>
                        <Signup/>
                        <CartBtn/>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;