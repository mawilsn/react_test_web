import React from 'react';
// import ReactDOM from 'react-dom'

import './App.css';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import Visual from './Visual';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
// import ObjectDetection from "./components/ObjDetect/src/App";



function App() {
  return (


    <Router>

<div className="App">
      

 

 

     
    <Switch>

          <Route path="/visual">
          <Visual/>
          </Route>
          <Route path="/objectdetection">
          {/* <ObjectDetection/> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      
        </div>

    </Router>
    
   
  );
}

export default App;
