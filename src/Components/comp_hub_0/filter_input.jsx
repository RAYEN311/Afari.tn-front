import React from 'react';
import  ReactDOM  from 'react-dom';
import "./styles/filter.css"
import { SyntheticEvent,useState } from 'react';
export default function Inp_fl(porps){
 var [min, setmin_price] = useState(0);
 var [max, setmax_price] = useState(0);
  return(
    <div className='fillter_forum'>
    <div className="wave-group">
    <input required="" type="number" id='min_price_input' className="input" onInput={e => setmin_price(e.target.value)} onBlur={e => e.target.value = ''}/>
    <span className="bar"></span>
    <label className="label">
    <span className="label-char label-char1 ">M</span>
    <span className="label-char label-char2 ">i</span>
    <span className="label-char label-char3 ">n</span>
    <span className="label-char label-char4 ">i</span>
    <span className="label-char label-char5 ">m</span>
    <span className="label-char label-char6 ">u</span>
    <span className="label-char label-char7 ">m</span>
    </label>
    </div>
    <div className="wave-group">
    <input required="" type="number" className="input" id='max_price_input' onInput={e => setmax_price(e.target.value)} onBlur={e => e.target.value = ''}/>
    <span className="bar"></span>
    <label className="label">
    <span className="label-char label-char1 ">M</span>
    <span className="label-char label-char2 ">a</span>
    <span className="label-char label-char3 ">x</span>
    <span className="label-char label-char4 ">i</span>
    <span className="label-char label-char5 ">m</span>
    <span className="label-char label-char6 ">u</span>
    <span className="label-char label-char7 ">m</span>
    </label>
    </div>
    </div>
  );
};

