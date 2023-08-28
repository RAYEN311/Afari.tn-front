import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

import Main from "../Components/comp_hub_1-Collected Componant/main";
import Nav from "../Components/comp_hub_1-Collected Componant/nav";
import Drawer from "../Components/comp_hub_1-Collected Componant/drawer";

import WaitScreen from "./wait_screen";

export default function Home(){
    

    const [showHome, setShowHome] = useState(false);
    useEffect(() => {
    const delay = 400; 

    const timeoutId = setTimeout(() => {
      setShowHome(true);
    }, delay);
    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the timeout completes
    };
  }, []);

  return (
    <div>
      {showHome ? (
        <div>
        <body>
        <Nav ></Nav>
        <Drawer></Drawer>
        <Main></Main>
        </body>       
        </div>
      ) : (
        <div>
          <WaitScreen></WaitScreen>
        </div>
      )}
    </div>
  )}