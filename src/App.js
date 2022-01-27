import { Component } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {  };
  }

  render() {
    return (
      <div className='wrapper'>
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
