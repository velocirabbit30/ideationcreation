import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { objectExpression } from '@babel/types';

function Filter(){
    return(
        <div className="filterBox">
            <h3>Filter Projects</h3>
            <form>
                <input type="text" name="search" placeholder="Search"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Filter;