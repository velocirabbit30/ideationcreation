import React, { Suspense, lazy, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import Filter from './filter.jsx';
import { Store } from '../state/reducers/userReducer.js';
// const ProjectsTable = React.lazy(() => import ('./projectsTable.jsx'));
import ProjectIdeasTable from './projectIdeasTable.jsx';
import { css } from '@emotion/core';
import { ClipLoader, PacmanLoader, DotLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
`;
function JunkyardView() {

  // const { state: { projects }} = useContext(Store);
  const [projectIdeas, setProjectIdeas] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then(data => {
        return data.json()
      })
      .then(projects => {
        console.log("projects:  ", projects)
        setProjectIdeas(projects);
        setLoading(false)
      })
  }, [])

  return (
    <div className="projectsView">

      <h1>Production Project Idea Junkyard</h1>
      <div className="projects">

        <Filter />
        <div className="loader">
          <DotLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={'#123abc'}
          loading={loading}
          className="pacman"
        />
        </div>
        {loading === false && <ProjectIdeasTable className="projectsTable" projects={projectIdeas} />}
      </div>
    </div>
  )
}

export default JunkyardView;