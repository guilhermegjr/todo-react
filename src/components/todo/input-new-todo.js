import React from 'react'
import { TodosActions } from '../../store/todo.actions'
import { connect } from 'react-redux'

function InputNewTodo(props) {
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

    const handleKeyPress = event => {
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
                onKeyPress={handleKeyPress.bind(this)}
                placeholder="Add your TODO here..."
            />
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: text => dispatch(TodosActions.addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(InputNewTodo)
