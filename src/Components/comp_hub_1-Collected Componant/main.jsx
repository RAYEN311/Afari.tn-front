import React from "react"
import Main_buttons from "../comp_hub_2-main_construct/buttons_bar";
import Sells_boxe from "../comp_hub_2-main_construct/sell_post";


export default function Main(){
    function prod_state_III()
    {
        prod_search_2.style.minHeight = "40px"
    }
    function prod_state_VI()
    {
        prod_search_2.style.minHeight = "0"
        prod_search_2.style.height = "0" ;
    }
    //////////////////////////////////////////////////////////////
    // object insted of data from database 

    let objects = [
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/min/logo.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/Afari_achat.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/Afari_achat.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/min/logo.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/min/logo.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/Afari_achat.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/Afari_achat.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/min/logo.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/Afari_achat.png',
        'msg' : '',
        'price': '220 dt',
        },
        {
        'tit' : 'motor',
        'dis' : 'Lorem ipsum tunisian motor with dark quality dolor sit amet consectetur adipisicing elit.',
        'img': 'http://localhost:3000/src/assets/images/Afari_achat.png',
        'msg' : '',
        'price': '220 dt',
        },
    ]
    return(
    <section className="main">
    <div className="subnav">
    <section>
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
     </section>
     <div className="product_searched" id="prod_search_2">

     </div>
     </div>
     <Main_buttons></Main_buttons>
     <div className="sell_boxs">{
        objects.map((object) =>(
            <Sells_boxe object={object}></Sells_boxe>
        ))
     }
     </div>
    </section>
    )
}