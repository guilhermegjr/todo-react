import { TodosActionsType } from './todo.actions'

const initialState = {
    todos: []
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TodosActionsType.ADD_TODO: {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: 1 + Math.random(), title: action.payload.text }
                ]
            }
        }

        case TodosActionsType.REMOVE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.payload.todo.id)
            }
        }

        case TodosActionsType.TOOGLE_TODO_DONE: {
            const { todo } = action.payload
            return {
                ...state,
                todos: state.todos.map(_todo => {
                    return _todo.id === todo.id
                        ? { ...todo, done: !todo.done }
                        : _todo
                })
            }
        }

        default: {
            return { ...state }
        }
    }
}
