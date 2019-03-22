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
        filteredarray: ""
    }
}
// componentDidUpdate = () => {
//   console.log(this.state.filteredarray)
// }  

  getData = (val) => {
    
    this.setState({filteredarray: val});
    console.log(this.state.filteredarray);
    
}

  render() {
    return (
      <div>
        <Router>
          <SearchBar sendData={this.getData}></SearchBar>
            <Header></Header>
            <div className="app-layout">
            <Route path="/topic/:series" component={props => <PodcastList {...props} /> } />
            <Route path="/topic/:series/:id" component={props => <PodcastPlayer {...props} /> } />
            
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
