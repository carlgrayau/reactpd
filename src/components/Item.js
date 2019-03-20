import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    

  render() {
    return (
      <div>
        Episode {this.props.episode.audio}
      </div>
    );
  }
}

export default Item;