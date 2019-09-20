import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js';
import { UPDATE_CURRENT_PROJECT, CURRENT_VIEW } from '../state/constants'

function SubNav(){
    const { dispatch, state: { currentView }} = useContext(Store);
    return (
        <div>
            <nav id="subNav">
                {/* <Link className="navLink" to="/" >Home</Link> */}
                <span className="navLink" onClick={() => {
                    dispatch({ type: CURRENT_VIEW, payload: "projects"})
                }} >Past Projects</span>
                <span className="navLink" onClick={() => {
                    dispatch({ type: CURRENT_VIEW, payload: "junkyard"})
                }} >Idea Junkyard</span>
            </nav>
        </div>
    )
}

export default SubNav;