import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js'
import TechView from './techView.jsx';
import ScriptTag from 'react-script-tag';
import { UPDATE_TECH_OBJ } from '../state/constants';




function IndividualIdeaProject(){

    const { dispatch, state: { currentProject, techObj }} = useContext(Store);

    // function techParse(string){
    //     const techArr = string.split(", ");
    //     return techArr;
    // }
    // const techArr = currentProject.technologies.split(", ");

    // techArr.forEach(tech =>{
    //     useEffect(() => {
    //         fetch('/api/tech', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 techName: tech
    //             })
    //         })
    //         .then(data => {
    //             return data.json()
    //         })
    //         .then(results => {
    //             const payload = { [tech]: results };
    //             dispatch({type: UPDATE_TECH_OBJ, payload})
    //         })
    //         .catch(err => console.error('Failed to fetch tech, error: ', err))
    //     }, []);
    // })

    return(
        <div className="individualProject">
     
            <h1>{currentProject.projectname}</h1>
            <div className="allInfoBox">
                <div className="infoBox">
                    <h2>Project Details</h2>
                    <ul>
                        <li>
                           <div className="detailName"> 
                           Project Type: 
                           </div> 
                            {currentProject.projecttype}
                        </li>
                        <li>
                           <div className="detailName"> 
                           Stack: 
                           </div> 
                            {currentProject.stack}
                        </li>
                        <li>
                           <div className="detailName"> 
                           Description: 
                           </div> 
                            {currentProject.description}
                        </li>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}

export default IndividualIdeaProject;