import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectsTable from './projectsTable.jsx';
import Filter from './filter.jsx';
import { Store } from '../state/reducers/userReducer.js'



function ProjectView(){

    const { state: { projects }} = useContext(Store);

    return(
        <div>
          <h1>Previous Production Projects</h1>
          <div className="projects">
              
              <Filter />
              <ProjectsTable projects={projects}/>
          </div>
        </div>
    )
}

export default ProjectView;