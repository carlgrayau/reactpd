import React, { Component } from 'react';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import PodcastPlayer from './components/PodcastPlayer';
import './App.css';
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
            <div className="app-layout">
            <Route path="/topic/:series" component={props => <PodcastList {...props} /> } />
            <Route path="/topic/:series/:id" component={PodcastPlayer} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
