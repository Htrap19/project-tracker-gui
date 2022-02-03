import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Button extends Component {

    displayText = (text) => {
        if (text === '')
            return '';
        
        return text
    }

    render() {
        const { text, icon, onClick, extraClassNames = "", extraStyle = {} } = this.props;

        return (
            <button type="button" className={"rounded py-1 px-3 " + extraClassNames} style={extraStyle} onClick={onClick}>
                { icon ? <FontAwesomeIcon icon={icon} style={{ marginRight: '5px' }} /> : null }
                { this.displayText(text) }
            </button>
        );
    }
}

export default Button;