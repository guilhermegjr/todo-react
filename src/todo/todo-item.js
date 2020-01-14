import React, { Component } from 'react'
import './todo-item.css'
import { Button } from '../common/button/button'

export class TodoItem extends Component {
    style = {
        title: { flex: 1 },
        buttonContainer: {
            paddingRight: '10px'
        }
    }

    render() {
        return (
            <div className="todo-item">
                <div style={this.style.title}>{this.props.todo.name}</div>
                <div style={this.style.buttonContainer}>
                    <Button title="Excluir"></Button>
                </div>
            </div>
        )
    }
}
