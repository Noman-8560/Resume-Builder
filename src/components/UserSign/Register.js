import React, { useState } from 'react'
import registerimg from './imgs/Register.png'
import './signin.css'
import { Link, useHistory } from 'react-router-dom'
// import axios from 'axios';

export default function Register() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const history = useHistory();
    // const toLoginPage = () => history.push('/signin');

    // const postUser = async (e) => {
    //     e.preventDefault();
    //     await axios.post("https://localhost:5034/api/users", {
    //         name,
    //         email,
    //         password
    //     })
    //         .then((response) => {
    //             toLoginPage();
    //         })
    // }



    return (
        <div>
            <div className='containerr'>
                <div className='info-img'>
                    <img src={registerimg} />
                </div>
                <form >
                    <h2>SIGN UP</h2>
                    <input type="text" placeholder="Enter Your Name.." class="input-info"></input>
                    <input type="email" placeholder="Enter Your Email.." class="input-info"></input>
                    <input type="text" placeholder="+923" class="input-info"></input>
                    <input type="password" placeholder="Enter Your Password.." class="input-info"></input>
                    <button placeholder="" class="submit"></button><br />
                    <a href='#' className='link'>Fogot Password?</a> <br />
                    <Link to='/login' className='link'> Already have an account?</Link>
                </form>
            </div>
        </div>
    )
}
