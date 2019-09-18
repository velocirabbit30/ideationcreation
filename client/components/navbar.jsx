import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

function Nav(){
    return (
        <div>
            <nav id="nav">
                <h1 id="logo">Ideation Creation</h1>
                <Link className="navLink" to="/" >Home</Link>
                <Link className="navLink" to="/projects" >Past Projects</Link>
            </nav>
        </div>
    )
}

export default Nav;