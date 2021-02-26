import React, { Component } from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer'
import CharacterContainer from './containers/CharacterContainer'
import CharacterShow from './components/characters/CharacterShow'
import ComicShow from './components/comics/ComicShow'

import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path='/comics/:id' component={ComicShow} />
            <Route exact path='/characters/:id' component={CharacterShow} />
            <Route exact path='/search' component={SearchContainer} />
            <Route exact path='/characters' component={CharacterContainer}/>
          </div>
          <a href="/search">Search again</a>
        </Router>
      );
  }
}



  
export default App;
