import React, { Component } from 'react'
import './button.css'

export class Button extends Component {
    render() {
        return <button className="button">{this.props.title}</button>
    }
}
