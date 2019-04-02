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
        testprop: "testing123",
        episodes: []

    }
  
}


  getData = (val) => {
    this.setState({filteredarray: val});
}

getEpisodes = (val) => {
  this.setState({episodes: val})
}

  render() {
    return (
      <div>
        <Router>
          <SearchBar sendData={this.getData}></SearchBar>
            <Header></Header>
            <div className="app-layout">
            <Route path="/topic/:series" render={(props) => (<PodcastList {...props} filteredarray={this.state.filteredarray} sendEpisodes={this.getEpisodes} /> )} />
            <Route path="/topic/:series/:id" 
                   render={(props) => ( <PodcastPlayer {...props} filteredarray1={this.state.episodes} /> 
                    )} 
            />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
