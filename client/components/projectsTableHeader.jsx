import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import ProjectRow from './projectRow.jsx';
import { objectExpression } from '@babel/types';

function TableHeader({products}){
    let header = Object.keys(products[0]);
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

export default TableHeader;


