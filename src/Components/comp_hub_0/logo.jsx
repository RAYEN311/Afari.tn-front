import React from "react"

import logo from "../../assets/images/min/logo.png";


export default function Logo(porps){
    return(
        <h1 class="title"><img className="title_img" src={logo} alt="Afari_logo"/>{porps.Title}<h6 className="after_tit">.TN</h6></h1>
    )
}




