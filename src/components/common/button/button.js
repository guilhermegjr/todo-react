import React, { Component } from 'react'
import './button.scss'

export class Button extends Component {
    render() {
        return (
            <button className="button" onClick={this.props.onClick}>
                {this.props.title}
            </button>
        )
    }
}
