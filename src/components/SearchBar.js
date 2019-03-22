import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: ""
        }
    }

   
    demoMethod = () => {
        this.props.sendData(this.state.filtered);
      }
 

    handleChange = (e)  =>  {
        e.preventDefault();
        this.setState({filtered: e.target.value});
        // this.props.sendData(this.state.filtered);
        
    }

  render() {
    return (
      <div>
        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..."></input>
        <button onClick={()=> this.props.sendData(this.state.filtered)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;