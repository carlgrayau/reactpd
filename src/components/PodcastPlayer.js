import React, { Component } from 'react';

class PodcastPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          episodes: [],
          results: [],
          isLoaded: false
        };
      }

      componentWillReceiveProps() {
          
        const result = this.props.filteredarray1.find(
            findid => findid.id === `${this.props.match.params.id}`);
            this.setState({ results: result});
            console.log(this.state.results);
      }

  render() {
  //  setTimeout(() => {console.log(this.props.filteredarray1)}, 4000)
    
    
    if (this.state.results !== undefined ) {
    return (
      <div>
        PODCAST PLAYER HERE of {this.props.match.params.id}
        <div>{this.state.results.audio || 'waiting on audio'}</div>
      </div>
    );
    } else {
        return (
            <div>Waiting on podcast...</div>
        )
    }
  }
}

export default PodcastPlayer;