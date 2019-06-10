import React from "react"
import HeaderData from "../data/header.json"


export default (props) => {
    console.log(HeaderData);
    return(
    <header>
        <nav>
        {HeaderData.navButtons.map((button, index) => (
            <span key={index}>{button}</span>
        ))}
        </nav>
    </header>
    )
}

