import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js';
import { UPDATE_CURRENT_PROJECT, CURRENT_VIEW } from '../state/constants'

function Nav(){
    const { dispatch, state: { currentView }} = useContext(Store);
    return (
        <div>
            <nav id="nav">
                <h1 id="logo">Ideation Creation</h1>
                {/* <Link className="navLink" to="/" >Home</Link> */}
                <span className="navLink" onClick={() => {
                    dispatch({ type: CURRENT_VIEW, payload: "projects"})
                }} >Past Projects</span>
            </nav>
        </div>
    )
}

export default Nav;