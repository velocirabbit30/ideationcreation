
import  React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import SubNav from './subNav.jsx';
import ProjectView from './projectView.jsx';
import Login from './login.jsx';
import { Store } from '../state/reducers/userReducer.js';
import IndividualProject from './individualProject.jsx'
import IndividualIdeaProject from './individualIdeaProject.jsx'

import JunkyardView from './junkyardView.jsx';


const Home = () => {
    const { state: { currentView }} = useContext(Store);
    return (  
        <div>
            <SubNav />
            {currentView ===  "projects" && <ProjectView></ProjectView>}
            {currentView ===  "junkyard" && <JunkyardView></JunkyardView>}
            {currentView ===  "individualProject" && <IndividualProject></IndividualProject>}
            {currentView ===  "individualIdeaProject" && <IndividualIdeaProject></IndividualIdeaProject>}
        </div>
      );
}
 
export default Home;