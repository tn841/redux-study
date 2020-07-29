import React, { useState } from 'react';
import store, { addTodo } from '../store';
import { connect } from 'react-redux';

function Home({todos}){
    const [text, settext] = useState("") //hooks

    function onChange(e) {
        settext(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
        settext("")
        store.dispatch(addTodo(text))
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

export default connect(mapStateToProps) (Home);
