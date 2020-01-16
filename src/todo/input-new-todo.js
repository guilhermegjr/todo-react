import React from 'react'

export function InputNewTodo(props) {
    const style = {
        div: {
            width: '100%',
            padding: '10px'
        },
        input: {
            padding: '10px',
            borderRadius: '10px',
            width: 'calc(100% - 50px)',
            fontSize: '17px',
            outline: 0
        }
    }

    const addTodo = event => {
        if (event.charCode === 13) {
            props.addTodo(event.target.value)
            event.target.value = ''
        }
    }

    return (
        <div style={style.div}>
            <input
                type="text"
                style={style.input}
                onKeyPress={addTodo.bind(this)}
                placeholder="Add your TODO here..."
            />
        </div>
    )
}
