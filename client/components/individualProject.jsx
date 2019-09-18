import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js'
import TechView from './techView.jsx'


function IndividualProject(){

    const { state: { currentProject }} = useContext(Store);


    function techParse(string){
        const techArr = string.split(", ");
        console.log("techArr: ", techArr)
        return techArr;
    }
    // useEffect(()=> {
    //     fetch()
    // }, [])

    return(
        <div>
            <h1>{currentProject.projectname}</h1>
            <ul>
                <li>
                    Cohort: {currentProject.cohort}
                </li>
                <li>
                    Released: {currentProject.released}
                </li>
                <li>
                    Project Type: {currentProject.projecttype}
                </li>
                <li>
                    Stack: {currentProject.stack}
                </li>
                <li>
                    Category: {currentProject.category}
                </li>
                <li>
                    Github Stars: {currentProject.githubstars}
                </li>
                <li>
                    Github Link: <a href={`${currentProject.githublink}`}>{currentProject.githublink}</a>
                </li>
                <li>
                    Write up Link: <a href={`${currentProject.writeuplink}`}>{currentProject.writeuplink}</a>
                </li>
                <li>
                    Description: {currentProject.description}
                </li>
                
            </ul>
            <div>
                    Technologies: 
                    <TechView techs={techParse(currentProject.technologies)}></TechView>
            </div>
        </div>
    )
}

export default IndividualProject;