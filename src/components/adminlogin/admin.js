import React from 'react'
import './admin.css'

export default function Admin() {
    return (
        <div><div className='containerr'>
            <form>
                <h2>Admin Log In</h2>
                <input type="email" placeholder="Enter Email" class="input-info"></input>
                <input type="password" placeholder="Enter Password" class="input-info"></input>
                <input type="submit" placeholder="" class="submit"></input><br />
            </form>
        </div>
        </div>
    )
}
