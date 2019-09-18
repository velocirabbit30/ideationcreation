import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectRow from './projectRow.jsx';
import { objectExpression } from '@babel/types';
import TableHeader from './projectsTableHeader.jsx';

function ProjectsTable({products}){
    return(
        <table>
            <tr><TableHeader products={products}/></tr>
            { products.map(row => {
                console.log("row: ", row);
                return <ProjectRow row={row} />
            })}
        </table>
    )
}

export default ProjectsTable;