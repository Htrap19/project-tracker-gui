import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Button extends Component {

    render() {
        const { text, img, extraClassNames = "", extraStyle = {} } = this.props;

        return (
            <button type="button" className={"rounded py-1 px-3 " + extraClassNames} style={extraStyle}>
                { img ? <FontAwesomeIcon icon={img} style={{ marginRight: '5px' }} /> : null }
                {text}
            </button>
        );
    }
}

export default Button;