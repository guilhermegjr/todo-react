import React, { Component } from 'react'
import './todo-list.css'
import { TodoItem } from './todo-item'

export class TodoList extends Component {
    render() {
        return <div className="todo-list">{this.renderTodos()}</div>
    }

    renderTodos() {
        return this.props.todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onClick={() => this.props.removeTodo(todo)}
                toogleDone={() => this.props.toogleDone(todo)}
            />
        ))
    }
}
