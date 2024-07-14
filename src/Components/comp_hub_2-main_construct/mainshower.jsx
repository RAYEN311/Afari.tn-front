import React from "react";
import Sells_boxe from "./sell_post";
import Rents_boxe from "./rent_post";
import Buys_boxe from "./buy_post";

export default function Mainshower(porps) {

    if(porps.modesbr == 'buy'){
        return (
            <div className="SBR_boxs">{
                porps.obj_buy.map((object) => (
                    <Buys_boxe object={object}></Buys_boxe>
                ))
            }
            </div>
        )
    
    }
    if(porps.modesbr == 'sell'){
        return (
            <div className="SBR_boxs">{
                porps.obj_sell.map((object) => (
                    <Sells_boxe object={object}></Sells_boxe>
                ))
            }
            </div>
        )
    
    }
    if(porps.modesbr == 'rent'){
        return (
            <div className="SBR_boxs">{
                porps.obj_rent.map((object) => (
                    <Rents_boxe object={object}></Rents_boxe>
                ))
            }
            </div>
        )
    
    }

}