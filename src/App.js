import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Top from './Top';
import {Button, Icon} from 'react-materialize'


class App extends Component {
  render() {
    return (
      <div className="App">

           <Button waves='light'>
    <Icon>thumb_up</Icon>
  </Button>

         <Router>
          <div>
            <Navbar /><hr/>
            <Route exact path='/Top' component={Top}/>
            <Route path='/About' component={About}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
