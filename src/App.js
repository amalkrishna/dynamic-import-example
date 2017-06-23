import React, { Component } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 1
    }
  }
  
  showTab(e, selectedTab) {
    e.preventDefault();
    this.setState({selectedTab});
  }

  render() {
    const {selectedTab} = this.state;

    return (
      <div className="App">
        <p>
          This app uses ES dynamic import support and Webpack to dynamically
          import a large bundle in componentDidMount.
        </p>

        <a href="" onClick={e => this.showTab(e, 1)}>Tab 1</a> | <a href="" onClick={e => this.showTab(e, 2)}>Tab 2</a> | <a href="" onClick={e => this.showTab(e, 3)}>Tab 3</a>
        
        { selectedTab === 1 && <Tab1 /> }
        { selectedTab === 2 && <Tab2 /> }
        { selectedTab === 3 && <Tab3 /> }
      </div>
    );
  }
}

export default App;