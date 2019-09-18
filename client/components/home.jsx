
import  React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import Nav from './navbar.jsx';
import ProjectView from './projectView.jsx';
import Login from './login.jsx';
import { Store } from '../state/reducers/userReducer.js';
import IndividualProject from './individualProject.jsx'


const Home = () => {
    const { state: { currentView }} = useContext(Store);
    return (  
        <div>
            <Nav />
            {currentView ===  "projects" && <ProjectView></ProjectView>}
            {currentView ===  "individualProject" && <IndividualProject></IndividualProject>}
        </div>
      );
}
 
export default Home;