import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./smoothScroll.css"
import ProfilePicture from './ProfilePicture/ProfilePicture';
class SmoothScroll extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = (key) => {
    console.log(key )
    // this.setState({ isActive: !this.state.isActive })
    this.setState({ isActive:this.state.isActive })
}
  
  render(){



    return(
  
        
        <div className = "toplist">
          <ProfilePicture/>
          <ul>
          <li><AnchorLink  href="#about" key={1}  onClick={ this.handleClick } className={ this.state.isActive  ? "active" : ""}>ABOUT</AnchorLink></li>
          <li> <AnchorLink id="anchor"  href="#experience" key={0} onClick={ this.handleClick } className={ this.state.isActive  ? "active" : ""} >EXPERIENCE</AnchorLink></li>      
          <li><AnchorLink href="#education" key={2}  onClick={ this.handleClick }className={ this.state.isActive  ? "active" : ""}>EDUCATION</AnchorLink></li>
          <li><AnchorLink href="#skills" key={3}  onClick={ this.handleClick } className={ this.state.isActive  ? "active" : ""}>SKILLS</AnchorLink></li>
          <li><AnchorLink href="#interests" key={4}  onClick={ this.handleClick } className={ this.state.isActive  ? "active" : ""}>INTERESTS</AnchorLink></li>
          
          <li><a href="/visual" >DEMO GRAPH</a></li>
          <li><a href="/objectdetection" >OBJECT</a></li>

        </ul></div>
        

    )
  }
};


export default SmoothScroll;
