import React from "react";

import "../login.css" ;
import "../Components/comp_hub_0/styles/sudo_button.css"

import LogoCopy from "../Components/comp_hub_0/logoCopy";


export default function Register(){
    return(
        <body className="for_login_forum padd_reg">   
        <LogoCopy Title={"fari"}></LogoCopy>
        <div class="login-forum">
        <form action="/" className="">
            <h2> 
             Account Creation</h2>
            <label htmlFor="email" >Email Adress</label>
            <input type="email" required />
            <label htmlFor="number" >Phone Number </label>
            {/* <input type="number" required placeholder="Exp: 35153185"/> */}
            <input type="number" required />
            <label htmlFor="password" >password</label>
            <input type="password" required/>
            <label htmlFor="password" >Confirm password</label>
            <input type="password" required/>
            <input type="submit" value={"Register"} className="sudo_button upper_spacing"/>
            <span>en passant vote demand et command sur afari vous accepter <a href="">les conditions generals</a> de afari consulter notre <a href=""> notice de protection </a> de vos inforamtion personelle , notre <a href="">notice cookies </a>et notre <a href="">notice annance </a>pub basser sur vos center d intert <br /><br /><li><a href="">need a help?</a></li></span>
        </form>
        <hr className="seprate_horizontal"/>
        <div className="vertical-spacing">
        {/* <a href="">Home </a> */}
        <a href="/login">Login</a>
        </div>
    </div>
        </body>
    )
}