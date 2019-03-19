import React, { Component } from 'react';

class Podcast extends Component {
  render() {
    return (
      <div>
        PODCAST PLAYER HERE of {this.props.match.params.series}
      </div>
    );
  }
}

export default Podcast;