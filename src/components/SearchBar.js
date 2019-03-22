import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: ""
        }
    }
 
    // handleClick = event => {
    //     event.preventDefault();
    //     this.props.sendData(this.state.filtered)
    //   }

    handleChange = (e)  =>  {
        e.preventDefault();
        this.props.sendData(e.target.value);
        
    }

  render() {
    return (
      <div>
        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..."></input>
        {/* <button onClick={this.handleClick}>Search</button> */}
      </div>
    );
  }
}

export default SearchBar;