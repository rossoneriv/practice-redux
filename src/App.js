import React, { Component } from 'react';

import './App.css';
import CounterContainer from './containers/CounterContainer';
import PaletteContainer from './containers/PaletteContainer';
import WaitingListContainer from './containers/WaitingListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer selected="red" />
        <CounterContainer value={0} color="red" />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
