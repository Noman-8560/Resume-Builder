import React from 'react';
import { Link } from 'react-router-dom';
import Uiimg from './imgs/login.png'
import './signin.css'
export default function SignIn() {
    return (
        <div>
            <div className='containerr'>
                <form>
                    <h2>SIGN IN</h2>
                    <input type="email" placeholder="Enter Email" class="input-info"></input>
                    <input type="password" placeholder="Enter Password" class="input-info"></input>
                    <input type="submit" placeholder="" class="submit"></input><br />
                    <a href='#' className='link'>Fogot Password?</a> <br />
                    <Link to='/signup' className='link'> Dont have an account? </Link>
                </form>
                <div className='info-img'>
                    <img src={Uiimg} />
                </div>
            </div>

        </div>
    )
}
