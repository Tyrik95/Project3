import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='mainNavbar'>
            <Link to='/team/:id'>Team</Link> {/* this will link to the users specific team */}
            <Link to='/'>Play</Link>
            <Link to='/league'>League</Link> {/* this will link to all teams */}
        </div>
    )
}

export default Navbar