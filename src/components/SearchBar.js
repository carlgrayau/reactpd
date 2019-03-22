import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: ""
        }
    }

    handleChange = (e)  =>  {
        e.preventDefault();
        this.setState({filtered: e.target.value});
        console.log(this.state.filtered);
    }

  render() {
    return (
      <div>
        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..."></input>
      </div>
    );
  }
}

export default SearchBar;