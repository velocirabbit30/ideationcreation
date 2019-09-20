import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { objectExpression } from '@babel/types';

function Filter(){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [technologies, setTechnologies] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('submit: ', data);
        // const data = new FormData(event.target);
        
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
      }

    return(
        <div className="filterBox">
            <h3>Add a Project Idea</h3>
            <form onSubmit={handleSubmit}>
                Project Name: <input type="text" name="name" placeholder="project name"/>
                Description: <input type="text" name="description" placeholder="description"/>
                Technologies: <input type="text" name="technologies" placeholder="technologies"/>
                Project Type: <input type="text" name="projecttype" placeholder="project type"/>
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Filter;