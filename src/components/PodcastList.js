import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

class PodcastList extends Component {
  state = {
      episodes: []
    };

  componentDidMount() {
    const CLIENT_ID_LISTEN = process.env.REACT_APP_CLIENT_ID_LISTEN;
    axios
        .get(
          `https://listennotes.p.rapidapi.com/api/v1/search?sort_by_date=0&type=episode&offset=0&len_min=2&len_max=10&genre_ids=68%2C82&published_before=1490190241000&published_after=1390190241000&only_in=title&language=English&safe_mode=1&q=${this.props.match.params.series}`, {
            headers: {
              'X-RapidAPI-Key': `${CLIENT_ID_LISTEN}`
            }
          }
        )
        .then(response => { this.setState({ episodes: response.data.results })
        });
        
  }

  render() {
    const { episodes } = this.state;
    if (episodes[0] === undefined) {
      return (<div>Fetching Podcast List, please wait..</div>)
    } else {
      return (<div>

        { episodes.map((episode, index) => ( <Item {...this.props} key={index} episode={episode} /> ))}
      </div>
      )
    }
  }
 
}

export default PodcastList;