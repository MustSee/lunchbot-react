import React, { Component } from 'react';
import axios from 'axios';
import path from './settings/api-url-path.json';
import './App.css';

import {MyMapComponent} from './components/map/map';
import SecondHalf from './components/secondHalf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots : []
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleMarkerClick(e) {
    console.log(e.latLng, "inside");
  }

  componentDidMount() {
    let fullUrl = path.url + '/all_places_to_eat';
    axios.get(fullUrl).then(res => console.log(res));
  }

  render() {

    console.log(this.state.spots);
    return (
      <div className="App">
          <MyMapComponent
              spots={this.state.spots}
              onMarkerClick={this.handleMarkerClick}
          />
          <SecondHalf />
      </div>
    );
  }
}

export default App;
