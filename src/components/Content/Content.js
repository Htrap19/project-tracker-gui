import React, { Component } from "react";
import MainContent from "./MainContent/MainContent";

import NavigationBar from "./NavigationBar/NavigationBar";
import Nothing from "./MainContent/Nothing/Nothing";

class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contentRoute: 'ProjectDetails',
            newAsset: false // toggle value for new asset model
        }
    }

    changeContentRoute = (newRoute) => {
        this.setState({ contentRoute: newRoute })
    }

    toggleNewAsset = () => {
        this.setState({ newAsset: !this.state.newAsset })
    }

    currentContent = (route) => {
        if (route === 'Project1')
            return (
                <div>
                    <NavigationBar changeContentRoute={this.changeContentRoute} contentRoute={this.state.contentRoute} toggleNewAsset={this.toggleNewAsset} />
                    <MainContent contentRoute={this.state.contentRoute} showAsset={this.state.newAsset} toggleNewAsset={this.toggleNewAsset} />
                </div>
            )

        return <Nothing />
    }

    render() {
        return (
            <div className="bg-midnight w-full text-stone-300">
                { this.currentContent(this.props.projectRoute) }
            </div>
        )
    }
}

export default Content;