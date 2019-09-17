import React, { useContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import './static/index.scss';
import Nav from './components/navbar.jsx';
import ProjectView from './components/projectView.jsx';
import UserContext from './state/context/index.js';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import UserReducer from './state/reducers/index.js'

// function Home(){
//   return <div><h2>Login</h2></div>
// }
// const products = [{
//   name: "onion",
//   price: ".99",
//   id: 1
// }, {
//   name: "pepper",
//   price: "1.25",
//   id: 2
// }, {
//   name: "broccoli",
//   price: "3.00",
//   id: 3
// }];


const App = () => {
  const initialState = useContext(UserContext);
  const [{ currentUser }, dispatch] = useReducer(
    UserReducer,
    initialState
  );

  return (
    <UserContext.Provider value={{ currentUser, dispatch }}>
      
      <Router>
        <Nav />
        <Register path="/register" />
        <Login path="/" />
          
          {/* <ProjectView path="/projects" /> */}
      </Router>
    </UserContext.Provider>
  )

  // return (  
  //   <Router>
  //       <Nav/>
  //     <Route exact path="/" component={Home} />
  //     <Route path="/projects" component={ProjectView} />
  //   </Router>
  // );
}
 
export default App;