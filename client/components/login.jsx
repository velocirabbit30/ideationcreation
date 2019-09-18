import React, { useContext, useState } from 'react';
import { Store } from '../state/reducers/userReducer.js'
import { LOGIN_USER } from '../state/constants.js';


function Login(){
    const [username, setusername] = useState('');
    const [userpassword, setuserpassword] = useState('');
    const { dispatch, state: {isLoggedIn} } = useContext(Store);

    return (
            <div>
             <h2>This is the Login screen</h2>
            <br />
                <input id="user"
                 placeholder="input username"
                 type="text"
                 onChange={(e)=>{console.log(e.target.value)}}/>
            <br />
                <input 
                id="pass" 
                placeholder="input password" 
                type="text"
                onChange={(e)=>{console.log(e.target.value)}}/>
            <br />
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