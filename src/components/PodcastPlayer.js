import React, { Component } from 'react';

class PodcastPlayer extends Component {
  render() {
    return (
      <div>
        PODCAST PLAYER HERE of {this.props.match.params.id}
      </div>
    );
  }
}

export default PodcastPlayer;