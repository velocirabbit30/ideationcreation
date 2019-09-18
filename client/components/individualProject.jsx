import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js'



function IndividualProject(){

    const { state: { projects }} = useContext(Store);
    
    // useEffect(()=> {
    //     fetch()
    // }, [])

    return(
        <div>
            <h1>Production Project</h1>
        </div>
    )
}

export default IndividualProject;