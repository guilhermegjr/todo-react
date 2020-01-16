import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title-container">{this.props.title}</div>
            </div>
        )
    }
}
