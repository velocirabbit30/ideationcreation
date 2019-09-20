import React, { useContext, useState } from 'react';
import { Store } from '../state/reducers/userReducer.js';
import Login from './login.jsx';
import { LOGIN_USER, CURRENT_VIEW } from '../state/constants.js';

function Register () {
  const [username, setusername] = useState('');
  //creating a custom hook "setusername" that we will use instead of "useContext"
  const [userpassword, setuserpassword] = useState('');
  //custom hook "setuserpassword" with the variable "userpassword" and initializing it to an empty string
  const [verifypassword, verifyuserpassword] = useState('');
  //custom hook "setuserpassword" with the variable "userpassword" and initializing it to an empty string
  const { dispatch, state: {isLoggedIn} } = useContext(Store);
  
  //connecting "dispatch" to state "isLoggedIn" with "useContext"
  const [displayErrorMessage, setdisplayErrorMessage] = useState('')

  const [signupclick, setsignupclick] = useState(true)


  if (signupclick === false) {
    return <Login></Login> 
 } else {
  return (
    <div>
         <h2>Register</h2>
        <br />
            <input id="user"
             placeholder="desired username"
             type="text"
             onChange={(e)=>{
                console.log("reg usr: " + username);
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
            <input 
            id="pass" 
            placeholder="verify password" 
            type="text"
            onChange={(e)=>{
                console.log("ver pwd: " + e.target.value);
                verifyuserpassword(e.target.value);
                }
            }
            />
        <br />
        <button onClick ={
            (e)=> {
                // console.log("You clicked the sign-up button");
                if (userpassword === verifypassword && userpassword != '' && username != ''){
                        //do a fetch request and send our local state of the username and the password in the body             
                  fetch('/api/auth/register',{
                      method: 'POST',
                      body: JSON.stringify({username: username, password: userpassword}),
                      headers:{'Content-Type': 'application/json'}
                  }).then(dispatch({ type: LOGIN_USER, payload: true}));  
                }
                else {
                  if(userpassword === verifypassword){
                    setdisplayErrorMessage("Password and Username is required.")
                  }
                  else{
                    setdisplayErrorMessage("Your passwords need to match.")
                  }
                } 
            }   
        }
            id="signup" type="signup">Sign Up</button>
            <div>
            <button onClick ={
                (e)=> {
                    //redirect to the "register" view
                   setsignupclick(false)
                }   
            }
                id="signup" type="signup">Go Back</button>
            </div>
        <div>
        <p>{displayErrorMessage}</p>
        </div>
    </div>

  );
  }
}


export default Register;
