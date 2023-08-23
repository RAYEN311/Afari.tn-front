import React, { useState } from 'react';
import axios from 'axios';
import "../login.css" ;
import "../Components/comp_hub_0/styles/sudo_button.css"

import LogoCopy from "../Components/comp_hub_0/logoCopy";


export default function Login(){
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        const [loginUrl,setloginurl] = useState('http://localhost:8000/api/login')

        const handleLogin = () => {


          if(email - 1 && email && password ){
            console.log(typeof(email))
            // Send login credentials to using phone and password
            axios.post( loginUrl , {
              phone: email,
              password: password
            })
            .then(response => {
              // Handle successful login
              console.log('Logged in:', response.data);
            })
            .catch(error => {
              // Handle login error 
              console.error('Login error:', error);
            });
          }




          else if(!(email - 1)  && email && password ){
            // Send login credentials to using email and password
            axios.post(loginUrl, {
              email: email,
              password: password
            })
            .then(response => {
              // Handle successful login
              console.log('Logged in:', response.data);
            })
            .catch(error => {
              // Handle login error 
              console.error('Login error:', error);
            });}




          }
         return(
        <body className="for_login_forum"> 
        <LogoCopy Title={"fari"}></LogoCopy>
        <div class="login-forum">
        <div className='form'>
            <h2> 
             identifcation</h2>
            <label htmlFor="text" >Phone Number / Email Adress</label>
            {/* <input type="text" required placeholder="Exp: 35153185"/> */}
            <input type="text" id='email' required onInput={e => setEmail(e.target.value)}/>
            <label htmlFor="password" >password</label>
            <input type="password" id='password' required onInput={e => setPassword(e.target.value)}/>
            <button onClick={handleLogin} className="sudo_button upper_spacing">Login</button>
            <span>en passant vote demand et command sur afari vous accepter <a href="">les conditions generals</a> de afari consulter notre <a href=""> notice de protection </a> de vos inforamtion personelle , notre <a href="">notice cookies </a>et notre <a href="">notice annance </a>pub basser sur vos center d intert <br /><br /><li><a href="">need a help?</a></li></span>
        </div>
        <hr className="seprate_horizontal"/>
        <div className="vertical-spacing">
        {/* <a href="">Home </a> */}
        <a href="/register">register</a>
        </div>
        <div className="empty_sp_v"></div>
    </div>
        </body>
    )
}