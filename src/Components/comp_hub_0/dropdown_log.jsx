import React from "react"
import ReactDOM  from "react-dom"

import './styles/dropdown_log.css'
import { Link } from "react-router-dom"
import ava from "../../assets/images/happ.png"

export default function DropLog(){
return(
        
        <>
             <div className="avater" id="avater">
                <div className="subavatar" id="dropdown" >
                        <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
                <h6>identifier vous</h6>
                <img className="profile_img" src={ava} alt="avatar" />
                </div>
                <div name="drop_log" className="drop_main_state">
                <div name="drop_log" id="drop_main_state">
                <Link className="button" to="/login">login</Link>
                <span>or</span>
                <Link className="button blue_col upper" to="/login">register</Link>
             </div>
             </div>
                </div>
        </>
)
}
