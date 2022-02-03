import React, { Component } from "react";
import MainContent from "./MainContent/MainContent";

import NavigationBar from "./NavigationBar/NavigationBar";

class Content extends Component {

    constructor(props) {
        super(props)

        this.state = { contentRoute: 'ProjectDetails' }
    }

    changeContentRoute = (newRoute) => {
        this.setState({ contentRoute: newRoute })
    }

    currentContent = (route) => {
        if (route === 'MainContent')
        {
            return (
                <div>
                    <NavigationBar changeContentRoute={this.changeContentRoute} />
                    <MainContent contentRoute={this.state.contentRoute} />
                </div>
            )
        }
        else if (route === 'NewProject')
            return (
                <div></div>
            )
    }

    render() {
        return (
            <div className="bg-midnight w-full text-stone-300">
                { this.currentContent(this.props.route) }
            </div>
        )
    }
}

export default Content;