import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js'



function IndividualProject(){

    const { state: { currentProject }} = useContext(Store);
    
    // useEffect(()=> {
    //     fetch()
    // }, [])

    return(
        <div>
            <h1>{currentProject["Project Name"]}</h1>
            <ul>
                <li>
                    Cohort: {currentProject.Cohort}
                </li>
                <li>
                    Released: {currentProject.Released}
                </li>
                <li>
                    Project Type: {currentProject["Project Type"]}
                </li>
                <li>
                    Stack: {currentProject.Stack}
                </li>
                <li>
                    Category: {currentProject.Category}
                </li>
                <li>
                    Github Stars: {currentProject["Github Stars"]}
                </li>
                <li>
                    Github Link: {currentProject["Github Stars"]}
                </li>
                <li>
                    Write up Link: {currentProject["Github Stars"]}
                </li>
                <li>
                    Description: {currentProject.Description}
                </li>
                <li>
                    Technologies: {currentProject.Technologies}
                </li>
            </ul>
        </div>
    )
}

export default IndividualProject;