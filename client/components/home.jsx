
import  React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import Nav from './navbar.jsx';
import ProjectView from './projectView.jsx';
import Login from './login.jsx';
import { Store } from '../state/reducers/userReducer.js'


const Home = () => {
    return (  
        <Router>
            <Nav/>
            <Route path="/projects" component={ProjectView} />
        </Router>
      );
}
 
export default Home;