import React, { Component } from 'react'
import './header.css'
import { Button } from '../button/button'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title-container">{this.props.title}</div>
                <div className="button-container">
                    <Button title="Novo"></Button>
                </div>
            </div>
        )
    }
}
