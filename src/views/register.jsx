import React , {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import "../login.css" ;
import "../Components/comp_hub_0/styles/sudo_button.css"

import LogoCopy from "../Components/comp_hub_0/logoCopy";


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const handleRegister = () => {
      // Send login credentials to your API using axios
        axios.post('http://localhost:8000/api/register', {
        name :name,
        email: email,
        phone:phone ,
        password: password,
      })
      .then(response => {
        // Handle successful login here
        console.log('Logged in:', response.data);
      })
      .catch(error => {
        // Handle login error here
        console.error('Login error:', error);
      });
    };
    return(
        
        <body className="for_login_forum">   
 
        <Link to='/'><LogoCopy Title={"fari"}></LogoCopy></Link>
        <div class="login-forum">
        <div className='form'>
            <h2> 
             Account Creation</h2>
            <label htmlFor="text" >name</label>
            <input type="text"  required onInput={e => setName(e.target.value)}/>
            <label htmlFor="email" >Email Adress</label>
            <input type="email" required onInput={e => setEmail(e.target.value)}/>
            <label htmlFor="number" >Phone Number </label>
            {/* <input type="number" required placeholder="Exp: 35153185"/> */}
            <input type="number" required onInput={e => setPhone(e.target.value)}/>
            <label htmlFor="password" >password</label>
            <input type="password" required onInput={e => setPassword(e.target.value)}/>
            <label htmlFor="password" >Confirm password</label>
            <input type="password" required onInput={e => setPasswordConfirm(e.target.value)}/>
            <button onClick={handleRegister} className="sudo_button upper_spacing">Register</button>
            <span>en passant vote demand et command sur afari vous accepter <a href="">les conditions generals</a> de afari consulter notre <a href=""> notice de protection </a> de vos inforamtion personelle , notre <a href="">notice cookies </a>et notre <a href="">notice annance </a>pub basser sur vos center d intert <br /><br /><li><a href="">need a help?</a></li></span>
        </div>
        <hr className="seprate_horizontal"/>
        <div className="vertical-spacing">
        <Link to='/login'>Login</Link>
        </div>
        <div className="empty_sp_v"></div>
    </div>
        </body>
    )
}