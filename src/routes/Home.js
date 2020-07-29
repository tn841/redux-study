import React, { useState } from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

function Home({todos, addTodo}){
    const [text, settext] = useState("") //hooks

    function onChange(e) {
        settext(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        addTodo(text)
        settext("")   
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button onClick={onsubmit}> submit</button>
            </form>
            <ul>
                {JSON.stringify(todos)}
            </ul>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    // mapStateToProps function
    // redux-store의 state를 react component의 prop으로 전달.
    return {todos: state}

}

function mapDispatchToProps(dispatch){
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
