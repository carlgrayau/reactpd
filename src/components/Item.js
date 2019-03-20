import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    

  render() {
    return (
      <div>
          <div>
        Episode {this.props.episode.title_original}
        </div>
        <div><Link to={`/topic/${this.props.match.params.series}/${this.props.episode.id}`}>Click Link:</Link></div>
      </div>
    );
  }
}

export default Item;