import React, { useEffect } from "react"
import { navigate } from "gatsby"

const Online = () => {
    useEffect(
        () =>
            (window.location.href =
                "https://widget.fitogram.pro/green-yoga/?w=/products")
    )
    return <div></div>
}

export default Online
