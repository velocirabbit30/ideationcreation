import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js';
import { StatefulToolTip } from "react-portal-tooltip";
import ScriptTag from 'react-script-tag';
import GoogleTrends from './googleTrends.jsx';


function TechView({techs}){

    const { state : { techObj }} = useContext(Store);

    let TechButtons = [];
    const statefulButtons = [];
    techs.forEach((tech, i) => {
        tech.trim();
        let links;
        let def;
        if(techObj[tech]){
             links = techObj[tech].links.map((link, i) => {
                 return <li key={i}><a href={link}>{link}</a></li>
             });
             console.log("links: ", links)
             def = techObj[tech].definition;
        } else {
             links = "No links found - Google it yourself!"
             def = "No definition found - Google it yourself!"
        }
        statefulButtons.push(<span key={i} className="techButton btn btn-default"><div>{tech}</div></span>);
        TechButtons.push(
            <StatefulToolTip parent={ statefulButtons[i] } key={i} position="left" arrow="top" className="stateful-button">
                <span className="techPopup" style={{display: "inline"}}>
                    <div>
                        <h1>
                            {tech}
                        </h1> 
                        <div>
                            <h3>Definition: </h3>  {JSON.stringify(def)}
                        </div>
                        <div className="popup">
                            <div>
                                <h3>Google Trends</h3>
                                <GoogleTrends tech={tech}/> 
                            </div>
                        <div>
                            <h3>Links: </h3> <ol>{links}</ol>
                        </div>

                        </div>


                    </div>
                </span>
            </StatefulToolTip>);
        })

    return(
        <div>
             <div className="techList" >
                {statefulButtons, TechButtons}
             </div>
        </div>
    )
}

export default TechView;

