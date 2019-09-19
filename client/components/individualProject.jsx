import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js'
import TechView from './techView.jsx';
import ScriptTag from 'react-script-tag';




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
        <div className="individualProject">
            {/* <ScriptTag isHydrating={true} type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/1937_RC01/embed_loader.js"></ScriptTag> */}
            {/* <ScriptTag isHydrating={false} type="text/javascript" >{trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"graphql","geo":"US","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"geo=US&q=graphql&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"})} </ScriptTag> */}

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
                    <h4>Technologies: </h4>
                    <TechView techs={techParse(currentProject.technologies)}></TechView>
            </div>
            

        </div>
    )
}

export default IndividualProject;