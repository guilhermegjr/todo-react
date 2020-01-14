import React, { Component } from 'react'
import './todo-list.css'
import { TodoItem } from './todo-item'

export class TodoList extends Component {
    render() {
        const todo = {
            name: 'Aprender react',
            id: 1
        }
        return (
            <div className="todo-list">
                <TodoItem todo={todo} />
            </div>
        )
    }
}
