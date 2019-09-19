import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectRow from './projectRow.jsx';
import { objectExpression } from '@babel/types';


function TableHeader(){
    return ([
            <th key="Cohort">Cohort</th>,
            <th key="Released">Released</th>,
            <th key="Project Name">Project Name</th>,
            <th key="Project Type">Project Type</th>,
            <th key="Stack">Stack</th>,
            <th key="Category">Category</th>,
            <th key="Technologies">Technologies</th>,
            <th key="Github Stars">Github Stars</th>,
            <th key="Github Link">Github Link</th>,
            <th key="Writeup Link">Writeup Link</th>,
            <th key="Description">Description</th>,
    ])
}

export default TableHeader;




