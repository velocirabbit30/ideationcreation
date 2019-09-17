import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {
  currentUser: localStorage.getItem("authenticated-user")
  ? JSON.parse(localStorage.getItem("authenticated-user"))
  : {},
  errorMessage: ""
};

const UserReducer = (state = initialState, { type, registeredUser, loggedInUser, success, message, boards }) => {
    switch (type) {
        case REGISTER_USER:
            console.log(
            `%c {type: REGISTER_USER, registeredUser: ${JSON.stringify(
            registeredUser )}}`, "color: yellow; font-weight: bold");
            return success ? { ...state, newUser: true }
            : { ...state, errorMessage: message };
        
        case LOGIN_USER:
            console.log(`%c {type: LOGIN_USER, loggedInUser:
            ${JSON.stringify(loggedInUser)}}`, "color: teal; font-weight:bold");
            return success ? { ...state, currentUser: loggedInUser }
            : { ...state, errorMessage: message } 
        case LOGOUT_USER:
            console.log(
                `%c {type: LOGOUT_USER, currentUser: {}} `,
                "color: pink; font-weight: bold" );
            return { ...state, currentUser: {} };
        default:
            return state;
    }
};

export default UserReducer;