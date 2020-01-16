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
        let titleStyle = !this.props.todo.done
            ? this.style.title
            : {
                  ...this.style.title,
                  textDecoration: 'line-through',
                  color: 'green'
              }

        return (
            <div className="todo-item">
                <div style={titleStyle}>{this.props.todo.title}</div>
                <div style={this.style.buttonContainer}>
                    <Button
                        title={this.props.todo.done ? 'Undone' : 'Done'}
                        onClick={this.props.toogleDone}
                    ></Button>
                    <Button
                        title="Excluir"
                        onClick={this.props.onClick}
                    ></Button>
                </div>
            </div>
        )
    }
}
