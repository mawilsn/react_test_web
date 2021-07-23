import React from 'react';
import SideBar from './components/SideBar/sidebar';
import Content from './Content';

import "./Home.css";
function home(){
    return(
        <div className="home">
        <div className="home-sidebar">
        <SideBar/>
        </div>
        <div className="home-content">
        <Content/>
        </div>

        </div>
    );
}

export default home;