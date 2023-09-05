import React from "react";
import useSound from 'use-sound';


import Logo from "../comp_hub_0/logo";
import DropLog from "../comp_hub_0/dropdown_log";
import DropTag from "../comp_hub_0/dropdown_tag";

import digi_burger from '../../assets/digi_burger.mp3';


export default function Nav(porps){
    
    function prod_state_I()
    {
        prod_search_1.style.minHeight = "40px"
        droptag.style.boxShadow = "none"
    }
    function prod_state_II()
    {
        prod_search_1.style.minHeight = "0"
        prod_search_1.style.height = "0" ;
        droptag.style.cssText = "0 0 5px 2px var(--box_shadow)"
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
    var title = 'fari'
    const [play] = useSound(digi_burger);
    return(
    <section className="nav">
    <label className="burger" for="burger">
    <input type="checkbox"  id="burger" onChange={drw_cn_bur} onClick={play}/>
    <span></span>
    <span></span>
    <span></span>
    </label>
    {/* <DropTag></DropTag> */}
    <Logo Title={title}></Logo>
    <div className="subnav">
    <DropTag></DropTag>
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
    <DropLog/>
    </section>
    )
}