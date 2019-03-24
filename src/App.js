import React, { Component } from 'react';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import PodcastPlayer from './components/PodcastPlayer';
import SearchBar from './components/SearchBar';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filteredarray: "",
        testprop: "testing123"

    }
}

  getData = (val) => {
    this.setState({filteredarray: val});
}

  render() {
    return (
      <div>
        <Router>
          <SearchBar sendData={this.getData}></SearchBar>
          <div><p>{this.state.filteredarray}</p></div>
            <Header></Header>
            <div className="app-layout">
            <Route path="/topic/:series" component={props => <PodcastList filteredarray={this.state.filteredarray}{...props} /> } />
            <Route path="/topic/:series/:id" component={props => <PodcastPlayer {...props} /> } />
            
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
