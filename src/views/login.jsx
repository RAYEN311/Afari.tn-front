import React from "react";

import "../login.css" ;
import "../Components/comp_hub_0/styles/sudo_button.css"

import LogoCopy from "../Components/comp_hub_0/logoCopy";


export default function Login(){
    return(
        <body className="for_login_forum">    
        <LogoCopy Title={"fari"}></LogoCopy>
        <div class="login-forum">
        <form action="/" className="">
            <h2> 
            <a href="/" className="back"><svg  fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></a>
             identifcation</h2>
            <label htmlFor="text" >Phone Number / Email Adress</label>
            {/* <input type="text" required placeholder="Exp: 35153185"/> */}
            <input type="text" required />
            <label htmlFor="password" >password</label>
            <input type="password" required/>
            <input type="submit" value={"login"} className="sudo_button upper_spacing"/>
            <span>en passant vote demand et command sur afari vous accepter <a href="">les conditions generals</a> de afari consulter notre <a href=""> notice de protection </a> de vos inforamtion personelle , notre <a href="">notice cookies </a>et notre <a href="">notice annance </a>pub basser sur vos center d intert <br /><br /><li><a href="">need a help?</a></li></span>
        </form>
        <hr className="seprate_horizontal"/>
        <div className="vertical-spacing">
        {/* <a href="">Home </a> */}
        <a href="/register">  register</a>
        </div>
    </div>
        </body>
    )
}