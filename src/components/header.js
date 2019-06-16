import React from "react"
import HeaderData from "../data/header.json"
import LogoLandscape from "./logo-landscape"
import "./header.css"

export default (props) => {
    return(
    <header className="header">
        <div className="header__logo-container">
            <LogoLandscape/>
        </div>
        <nav className="header__navigation">
            <ul className="header__navigation-list">
                {HeaderData.navButtons.map((button, index) => (
                    <li className="header__navigation-list-item" key={index}>{button}</li>
                ))}
            </ul>
        </nav>
    </header>
    )
}

