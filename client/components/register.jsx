import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { registerUser } from "../state/actions/registration.js";
import { useContext } from "react";
import UserContext from "../state/context/userContext.js";

const initialFormState = {
  username: "",
  email: "",
  password: "",
  organization: ""
};

// const Register = () => {
//   const [user, setUser] = useState(initialFormState);
//   const { dispatch } = useContext(UserContext);
//   const handleInput = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     setUser(initialFormState);
//     registerUser(user, dispatch);
//     return <Redirect to="/" /> 
//     };
// }

const Register = () => {
    return <h2>Register!!!!!</h2>
}

export default Register;