import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import './style.css'

class Button extends Component {

    render() {
        const { text, color, img } = this.props;

        return (
            <button type="button" className="normal-button" style={{ backgroundColor: color }}>
                { img ? <FontAwesomeIcon icon={img} style={{ marginRight: '5px' }} /> : null }
                {text}
            </button>
        );
    }
}

export default Button;