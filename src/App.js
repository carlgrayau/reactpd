import React, { Component } from 'react';
import Header from './components/Header';
import Podcast from './components/Podcast';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Header></Header>
            <Route path="/topic/:series" component={Podcast} />
        </Router>
      </div>
    );
  }
}

export default App;
