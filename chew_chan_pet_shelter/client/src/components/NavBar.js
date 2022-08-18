import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-dark nav-bar col-12 no-gutter fluid nav '>
            <div className='col col-10 d-flex justify-content-between ms-5'>
                <h1 className='text-warning '>Pet Shelter</h1>
                <NavLink to="/" className="m-3 text-success">Home</NavLink>
            </div>
        </div>
    )
}

export default NavBar