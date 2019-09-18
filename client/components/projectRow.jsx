import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

function ProjectRow({row}){
    return(
        <tr>
            <td key={row.name}>{row.name}</td>
            <td key={row.id}>{row.id}</td>
            <td key={row.price}>{row.price}</td>
        </tr>
    )
}

export default ProjectRow;