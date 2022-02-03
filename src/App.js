import React, { Component } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { route: 'MainContent' };
  }

  changeRoute = (route) => {
    this.setState({ route: route })
  }

  render() {
    return (
      <div className='wrapper'>
        <Sidebar changeRoute={this.changeRoute} />
        <Content route={this.state.route} />
      </div>
    );
  }
}

export default App;
