import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
           <Link to="/" style={{ textDecoration: 'none' }}> <h2> React - Album List </h2> </Link> 
           <Link to="/add-album"><button> Add Album! </button></Link> 
        </div>
    )
}

export default Navbar;