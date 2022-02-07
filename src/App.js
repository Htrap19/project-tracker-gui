import React, { Component } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import NewProject from "./components/NewProject/NewProject";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = { route: 'MainContent' };
    }

    changeRoute = (route) => {
        this.setState({ route: route })
    }

    currentContent = (route) => {
        if (route === 'MainContent')
            return (
                <div className='bg-midnight wrapper'>
                    <Sidebar changeRoute={this.changeRoute} />
                    <Content route={this.state.route} />
                </div>
            )
        else if (route === 'NewProject')
            return (
                <div className='bg-midnight wrapper'>
                    <NewProject changeRoute={this.changeRoute} />
                </div>
            )
    }

    render() {
        return (
            <div className='wrapper'>
                { this.currentContent(this.state.route) }
            </div>
        );
    }
}

export default App;
