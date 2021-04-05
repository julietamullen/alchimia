import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <p>Alchimia</p>
            <div className="navLinks">
            <Link to="/">HOME</Link>
            <Link to="../Cocktails">COCKTAILS</Link>
            <Link to="../Contact">CONTACT</Link>
            </div>
        </nav>
    )
}

export default Navbar