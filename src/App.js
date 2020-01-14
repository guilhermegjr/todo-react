import React from 'react'
import './App.css'
import { Header } from './common/header/header'
import { TodoList } from './todo/todo-list'

function App() {
    return (
        <div className="App">
            <Header title="TODO" />
            <TodoList />
        </div>
    )
}

export default App
