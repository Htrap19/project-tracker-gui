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

    render() {
        return (
            <div className="bg-midnight w-full text-stone-300">
                <NavigationBar changeContentRoute={this.changeContentRoute} />
                <MainContent contentRoute={this.state.contentRoute} />
            </div>
        )
    }
}

export default Content;