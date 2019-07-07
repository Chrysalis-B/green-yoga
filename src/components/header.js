import React from "react"
import { Link } from "gatsby"
import HeaderData from "../data/navigation.json"
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
                {HeaderData.header.map((button, index) => (
                    <Link to={button.url} key={index}>
                        <li className="header__navigation-list-item">{button.text}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    </header>
    )
}

