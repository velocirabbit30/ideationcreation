import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../constants";
import React from "react";

const initialState = {
  isLoggedIn: false,
  errorMessage: ""
};

const UserReducer = (state, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, newUser: true };
        
        case LOGIN_USER:
            return {...state, isLoggedIn: action.payload};

        case LOGOUT_USER:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};

export const Store = React.createContext(initialState);

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(UserReducer, initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}