import React from 'react'
import './navbar.css'
const navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <div className="logo">Logo</div>
                <ul className='links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default navbar
