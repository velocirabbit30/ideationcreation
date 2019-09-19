
import  React, { useContext } from 'react';
import './static/index.scss';
import Nav from './components/navbar.jsx';
import ProjectView from './components/projectView.jsx';
import Login from './components/login.jsx';
import { Store } from './state/reducers/userReducer.js'
import Home from './components/home.jsx';


const Main = () => {
  const { state: { isLoggedIn, projects }} = useContext(Store);
  return(
      <div className="main">
        {isLoggedIn === false && <Login></Login>}
        {isLoggedIn === true && <Home products={projects}/>}
      </div>
  )
}
 
export default Main;