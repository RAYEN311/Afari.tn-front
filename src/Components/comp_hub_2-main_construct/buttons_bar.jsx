import React from "react";
import "./main_styles/buttons_bar.css"

export default function Main_buttons(porps){
   return (
    <div className="main_buttons_bar">
        <div className="sec_sub_main_butt_bar_i">
        <button className="button_bar">sell</button>
        <button className="button_bar">buy</button>
        <button className="button_bar">rent</button>
        </div>
        <div className="sec_sub_main_butt_bar_ii">
        <button className="button_bar gold">poster un annoce</button>
        <button className="button_bar green">poster un publication </button>
        </div>
    </div>
   )
}