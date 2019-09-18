import React, { useContext } from 'react';
import { Store } from '../state/reducers/userReducer.js'
import { LOGIN_USER } from '../state/constants.js';


function Login(){
    const { dispatch, state: {isLoggedIn} } = useContext(Store);
    return (
            <div>
        <form> 
            <h2>This is the Login screen</h2>
            <br />
            <input id="user" name="user" placeholder="user" type="text"/>
            <br />
            <input id="pass" name="pass" placeholder="pass" type="text"/>
            <br />
        </form>
            <button onClick ={
                (e)=> {
                    dispatch({ type: LOGIN_USER, payload: true});
                }
            }
                id="submit" type="submit">Sign In</button>
        </div>
   
    );
}

export default Login;