import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../constants";
import React from "react";

const initialState = {
  isLoggedIn: true,
  errorMessage: "",
  projects: [
    {
        Cohort: 30,
        Released: "9,Sep-2016",
        "Project Name": "Conspectio",
        "Project Type": "Developer Library",
        Stack: "Full Stack",
        Category: "WebRTC",
        "Github Stars": 62,
        Technologies: "JavaScript, jQuery, WebRTC, Socket.io, Node, Express, AlaSQL, Cold-Brew (WebRTC testing library), Selenium WebDriver, Mocha, Chai, Supertest",
        "Github Link": "https://github.com/conspectio/conspectio",
        "Write up Link": "https://docs.google.com/document/d/1RUZdrtODi_i_0sdrsNh-HqoNPAcOKao_5qQUuIunCsM/edit?usp=sharing",
        Description: "an open-source library for grouping multiple live stream broadcasts, and scaling viewers using a p2p decentralized model."
    },  
    {
        Cohort: 30,
        Released: "9,Sep-2016",
        "Project Name": "Conspectio",
        "Project Type": "Developer Library",
        Stack: "Full Stack",
        Category: "WebRTC",
        "Github Stars": 62,
        Technologies: "JavaScript, jQuery, WebRTC, Socket.io, Node, Express, AlaSQL, Cold-Brew (WebRTC testing library), Selenium WebDriver, Mocha, Chai, Supertest",
        "Github Link": "https://github.com/conspectio/conspectio",
        "Write up Link": "https://docs.google.com/document/d/1RUZdrtODi_i_0sdrsNh-HqoNPAcOKao_5qQUuIunCsM/edit?usp=sharing",
        Description: "an open-source library for grouping multiple live stream broadcasts, and scaling viewers using a p2p decentralized model."
    },
    {
        Cohort: 30,
        Released: "9,Sep-2016",
        "Project Name": "Conspectio",
        "Project Type": "Developer Library",
        Stack: "Full Stack",
        Category: "WebRTC",
        "Github Stars": 62,
        Technologies: "JavaScript, jQuery, WebRTC, Socket.io, Node, Express, AlaSQL, GraphQL, Cold-Brew (WebRTC testing library), Selenium WebDriver, Mocha, Chai, Supertest",
        "Github Link": "https://github.com/conspectio/conspectio",
        "Write up Link": "https://docs.google.com/document/d/1RUZdrtODi_i_0sdrsNh-HqoNPAcOKao_5qQUuIunCsM/edit?usp=sharing",
        Description: "an open-source library for grouping multiple live stream broadcasts, and scaling viewers using a p2p decentralized model."
    },
    {
        Cohort: 30,
        Released: "9,Sep-2016",
        "Project Name": "Conspectio",
        "Project Type": "Developer Library",
        Stack: "Full Stack",
        Category: "WebRTC",
        "Github Stars": 62,
        Technologies: "JavaScript, jQuery, WebRTC, Socket.io, Node, Express, AlaSQL, Cold-Brew (WebRTC testing library), Selenium WebDriver, Mocha, Chai, Supertest",
        "Github Link": "https://github.com/conspectio/conspectio",
        "Write up Link": "https://docs.google.com/document/d/1RUZdrtODi_i_0sdrsNh-HqoNPAcOKao_5qQUuIunCsM/edit?usp=sharing",
        Description: "an open-source library for grouping multiple live stream broadcasts, and scaling viewers using a p2p decentralized model."
    }
  ]
};

const UserReducer = (state, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, newUser: true };
        
        case LOGIN_USER:
            return {...state, isLoggedIn: true};

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