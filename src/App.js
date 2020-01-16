import React, { Component } from 'react'
import './App.css'
import { Header } from './components/common/header/header'
import TodoList from './components/todo/todo-list'
import InputNewTodo from './components/todo/input-new-todo'
import { connect } from 'react-redux'

class App extends Component {
    renderNothingToDo() {
        const style = {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }

        return this.props.todosToBeDone ? null : (
            <div style={style}>
                <p>Great Job!</p>
                <p>You have nothing to do. ;)</p>
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <Header title={`TODO (${this.props.todosToBeDone})`} />
                <InputNewTodo />
                {this.renderNothingToDo()}
                <TodoList />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todosToBeDone: state.todos.filter(t => !t.done).length
    }
}

export default connect(mapStateToProps, null)(App)
