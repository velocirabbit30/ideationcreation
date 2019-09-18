import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectsTable from './projectsTable.jsx';
import Filter from './filter.jsx';


function ProjectView(){
    const products = [{
        name: "onion",
        price: ".99",
        id: 1
      }, {
        name: "pepper",
        price: "1.25",
        id: 2
      }, {
        name: "broccoli",
        price: "3.00",
        id: 3
      }];

    return(
        <div>
        <h1>Previous Production Projects</h1>
        <div className="projects">
            
            <Filter />
            <ProjectsTable products={products}/>
            {console.log("products: ", products)}
        </div>
        </div>
    )
}

export default ProjectView;