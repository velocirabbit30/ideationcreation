import React from 'react';
import './static/index.scss';
import { StoreProvider } from './state/reducers/userReducer.js';
import Main from './main.jsx';


const App = () => {
  return(
    <StoreProvider>
        <Main />
    </StoreProvider>
  )
}
 
export default App;