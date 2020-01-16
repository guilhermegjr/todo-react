import React, { Component } from 'react'
import './App.css'
import { Header } from './common/header/header'
import { TodoList } from './todo/todo-list'
import { InputNewTodo } from './todo/input-new-todo'

function AlcureBolado(props) {
    return <p>Alcure é boladão!!!</p>
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'My TODO',
                    done: false
                },
                {
                    id: 2,
                    title: 'My 2o TODO',
                    done: false
                }
            ]
        }
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleToogleDone = this.handleToogleDone.bind(this)
        this.renderNothingToDo = this.renderNothingToDo.bind(this)
    }

    handleAddTodo(title) {
        const todo = { id: 1 + Math.random(), title }
        this.setState({ todos: [...this.state.todos, todo] })
    }

    handleRemoveTodo(todo) {
        this.setState({ todos: this.state.todos.filter(t => t.id !== todo.id) })
    }

    handleToogleDone(todo) {
        this.setState({
            todos: this.state.todos.map(t => {
                return t.id !== todo.id ? t : { ...todo, done: !todo.done }
            })
        })
    }

    renderNothingToDo() {
        const style = {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }

        const thingsToDo = !!this.state.todos.filter(t => !t.done).length

        return thingsToDo ? null : (
            <div style={style}>
                <p>Great Job!</p>
                <p>You have nothing to do. ;)</p>
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <Header title={`TODO (${this.state.todos.length})`} />
                <InputNewTodo addTodo={this.handleAddTodo} />
                {this.renderNothingToDo()}
                <TodoList
                    todos={this.state.todos}
                    removeTodo={this.handleRemoveTodo}
                    toogleDone={this.handleToogleDone}
                />
            </div>
        )
    }
}

export default App
