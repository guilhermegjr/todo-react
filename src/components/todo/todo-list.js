import React, { Component } from 'react'
import './todo-list.css'
import { TodoItem } from './todo-item'
import { TodosActions } from '../../store/todo.actions'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        return <div className="todo-list">{this.renderTodos()}</div>
    }

    renderTodos() {
        return this.props.todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={() => this.props.removeTodo(todo)}
                toogleDone={() => this.props.toogleDone(todo)}
            />
        ))
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeTodo: todo => dispatch(TodosActions.removeTodo(todo)),
        toogleDone: todo => dispatch(TodosActions.toogleTodoDone(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
