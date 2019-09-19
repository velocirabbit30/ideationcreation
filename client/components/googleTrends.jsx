import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Store } from '../state/reducers/userReducer.js'
import TechView from './techView.jsx';
import ScriptTag from 'react-script-tag';

function GoogleTrends({tech}){
    tech.trim();
    let src = "https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22"+tech+"%22%2C%22geo%22%3A%22US%22%2C%22time%22%3A%22today%2012-m%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=420&eq=geo%3DUS%26q%3D"+tech+"%26date%3Dtoday%2012-m";

    return(
        <div>
             <iframe id={tech} src={src} width="100%" height="500px" frameBorder="0" scrolling="0" ></iframe>
        </div>
    )
}

export default GoogleTrends;

