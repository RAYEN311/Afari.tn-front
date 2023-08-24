import React from "react";
import './main_styles/sell_styles.css'


export default function Sells_boxe(porps){
        let msg_link = porps.object.msg;
        let title = porps.object.tit;
        let disc = porps.object.dis;
        let img_link = porps.object.img;
        let price = porps.object.price;
        let redirect_link = porps.object.ridc || 'not available';
        return(
              <div className="sell_box">

                  <img src={img_link} alt={title} />
                  <span className="sell_title">{title}</span>
                  <span className="sell_disc">{disc}</span>
                  <a className="sell_msg" href={msg_link}>message</a>
                  <span className="sell_price">{price}</span>

              </div>
        )
    }
        