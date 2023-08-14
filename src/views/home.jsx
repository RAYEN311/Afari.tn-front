import React from "react";
import ReactDOM from "react-dom";



import RangeSlider from "rsuite/RangeSlider";
import "rsuite/dist/rsuite.css";
import { useState } from "react";

import Dropdown from "../Components/dropdown_log";
import Categories from "../Components/subcategorie";
import Cost_min_max from "../Components/indicator";

import logo from "../assets/images/min/logo.png";
import Inp_fl from "../Components/filter_input"
// import homejs from "../assets/Vanilla/Home.js";


export default function Home(){



    const [firstValue, setFirstValue] = useState(120);
    const [secondValue, setSecondValue] = useState(700);
    function handleRanges(value) {
    setFirstValue(value[0]);
    setSecondValue(value[1]);
    }




    var drawer_state = false ;
    function drw_cn_bur(){
        if(!drawer_state){
            drawer.style.left = "0" ;
            drawer_state = true;
        }else{
            drawer.style.left = "-100%"
            drawer_state = false;
        }
    }


    function prod_state_I()
    {
        prod_search_1.style.minHeight = "40px"
    }
    function prod_state_II()
    {
        prod_search_1.style.minHeight = "0"
        prod_search_1.style.height = "0" ;
    }
    

    function prod_state_III()
    {
        prod_search_2.style.minHeight = "40px"
    }
    function prod_state_VI()
    {
        prod_search_2.style.minHeight = "0"
        prod_search_2.style.height = "0" ;
    }

    // const [range, setRange] = React.useState([0, 100000]);
    // function handleChanges(event, newValue) {
    // setRange(newValue);}




     return(
        <body>
            <section className="nav">
            <label className="burger" for="burger">
            <input type="checkbox" id="burger" onChange={drw_cn_bur}/>
            <span></span>
            <span></span>
            <span></span>
            </label>
                <h1 class="title"><img className="title_img" src={logo} alt="Afari_logo"/>fari.tn</h1>

                <div className="subnav">
            <form className="form_search">
             <button>
             <svg width="17" height="16" fill="none" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
             </svg>
            </button>
            <input className="input" placeholder="Type your text" required="" type="text" id="search" onFocus={prod_state_I} onBlur={prod_state_II}/>
            <button className="reset" type="reset">
             <svg  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            </button>

             </form>
             <button className="search_but">
                search
             </button>
             <div className="product_searched" id="prod_search_1">

             </div>
            </div>

            <Dropdown/>
            </section>
             
            <section className="drawer" id="drawer">
                <div className="settings">
                    <span>settings</span>
                    <svg className="sett_svg" viewBox="0 0 512 512"><path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z"/></svg>
                </div>
                <div className="filter">
                    <span>filter</span>
                </div>
                    <Inp_fl/>
                    <Cost_min_max/>
                    <RangeSlider className="fillter_range_cost" min={0} max={1000} defaultValue={[120, 600]} onChange={handleRanges} /> 
                    <h6 className="para_range_fill">price between <font className="green_font"> {firstValue } Dt</font> and <font className="green_font">{secondValue } dt</font></h6>
                <div className="categories">
                     <span>categories</span>
                </div>
                <Categories/>

            </section>

            <section className="main">
            <div className="subnav">
            <form className="form_search">
             <button>
             <svg width="17" height="16" fill="none" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
             </svg>
            </button>
            <input className="input" placeholder="Type your text" required="" type="text" id="search" onFocus={prod_state_III} onBlur={prod_state_VI}/>
            <button className="reset" type="reset">
             <svg  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            </button>

             </form>
             <button className="search_but">
                search
             </button>
             <div className="product_searched" id="prod_search_2">

             </div>
             </div>
            </section>
        </body>       
     ) 
}