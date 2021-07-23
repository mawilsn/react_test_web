import React from 'react';
// import { Link } from 'react-router';
import "./SideBar.css"
import SmoothScroll from './smoothScroll';
// import AnchorLink from 'react-anchor-link-smooth-scroll'

class SideBar extends React.Component{

  render(){
  return(
    <div className = 'wrapper'>
      <div className="sidebar">
    <SmoothScroll />
    </div>

    </div>

  )}
}

export default SideBar;