import React from "react"
import { Link } from "gatsby"
import HeaderData from "../data/header.json"
import LogoLandscape from "./logo-landscape"
import "./header.css"

export default (props) => {
    return(
    <header className="header">
        <div className="header__logo-container">
            <Link to="/">
                <LogoLandscape/>
            </Link>
        </div>
        <nav className="header__navigation">
            <ul className="header__navigation-list">
                {HeaderData.navButtons.map((button, index) => (
                    <Link to={button.href} key={index}>
                        <li className="header__navigation-list-item">{button.text}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    </header>
    )
}

