import React, { useContext, useState } from 'react';
import { Store } from '../state/reducers/userReducer.js'
import { LOGIN_USER } from '../state/constants.js';
import Register from './register.jsx';

function Login(){
    const [username, setusername] = useState('');
    const [signupclick, setsignupclick] = useState(false)
    //creating a custom hook "setusername" that we will use instead of "useContext"
    const [userpassword, setuserpassword] = useState('');
    //custom hook "setuserpassword" with the variable "userpassword" and initializing it to an empty string
    const { dispatch, state: {isLoggedIn} } = useContext(Store);
    //connecting "dispatch" to state "isLoggedIn" with "useContext"
    const [displayErrorMessage, setdisplayErrorMessage] = useState('')
        //If we want to verify that the state is truly changing we could use this debugging code :)
        // React.useEffect(() => {
            // console.log(username);
        // })
    if (signupclick === true) {
        return <Register></Register> 
     } else {
    return (
        <div>
             <h2>Login</h2>
            <br />
                <input id="user"
                 placeholder="input username"
                 type="text"
                 onChange={(e)=>{
                    console.log("usr: " + username);
                     setusername(e.target.value);}
                    //use our custom hook "setusername" to change state
                }
                />
            <br />
                <input 
                id="pass" 
                placeholder="input password" 
                type="text"
                onChange={(e)=>{
                    console.log("pwd: " + e.target.value);
                    setuserpassword(e.target.value);
                    //use our custom hook "setuserpassword" to change state
                    }
                }
                />
            <br />
            <button onClick ={
                (e)=> {

                    if (userpassword != '' && username != ''){
                      dispatch({ type: LOGIN_USER, payload: true});                    
                      //do a fetch request and send our local state of the username and the password 
                      //then if the server validates our request we can change logged-in to true    
                    }
                        else {
                            setdisplayErrorMessage("Username and Password are required.")
                        } 
                    }   
            }
                id="submit" type="submit">Sign In</button>
            <button onClick ={
                (e)=> {
                    //redirect to the "register" view
                    setsignupclick(true);
                    console.log("You clicked the register button");  
                }   
            }
                id="signup" type="signup">Sign Up</button>
            <div>
                <p>{displayErrorMessage}</p>
            </div>
        </div>
   
    );
    }
}

export default Login;