
import  React, { useContext } from 'react';
import './static/index.scss';
import Nav from './components/navbar.jsx';
import ProjectView from './components/projectView.jsx';
import Login from './components/login.jsx';
import { Store } from './state/reducers/userReducer.js'
import Home from './components/home.jsx';


const products = [{
  name: "onion",
  price: ".99",
  id: 1
}, {
  name: "pepper",
  price: "1.25",
  id: 2
}, {
  name: "broccoli",
  price: "3.00",
  id: 3
}];


const Main = () => {
  const { state: { isLoggedIn }} = useContext(Store);
  return(
      <div>
        {isLoggedIn === false && <Login></Login>}
        {isLoggedIn === true && <Home products={products}/>}
      </div>
  )
}
 
export default Main;