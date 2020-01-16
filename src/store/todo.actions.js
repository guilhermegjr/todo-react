export const TodosActionsType = {
    ADD_TODO: '[TODO] ADD TODO',
    REMOVE_TODO: '[TODO] Remove TODO',
    TOOGLE_TODO_DONE: '[TODO] Toogle TODO Done'
}

export const TodosActions = {
    addTodo: text => ({ type: TodosActionsType.ADD_TODO, payload: { text } }),
    removeTodo: todo => ({
        type: TodosActionsType.REMOVE_TODO,
        payload: { todo }
    }),
    toogleTodoDone: todo => ({
        type: TodosActionsType.TOOGLE_TODO_DONE,
        payload: { todo }
    })
}
