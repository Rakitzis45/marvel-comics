import React, { Component } from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer'
import CharacterContainer from './containers/CharacterContainer'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path='/search' component={SearchContainer} />
            <Route exact path='/characters' component={CharacterContainer}/>
            <a href="/search">Search again</a>
          </div>
        </Router>
      );
  }
}



  
export default App;
