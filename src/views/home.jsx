import React from "react";
import ReactDOM from "react-dom";

import Main from "../Components/comp_hub_1-Collected Componant/main";
import Nav from "../Components/comp_hub_1-Collected Componant/nav";
import Drawer from "../Components/comp_hub_1-Collected Componant/drawer";

export default function Home(){
    var title = 'fari'
    return(
        <body>
        <Nav Title={title}></Nav>
        <Drawer></Drawer>
        <Main></Main>
        </body>       
     ) 
}