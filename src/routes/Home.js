import React, { useState } from 'react';
import { add } from '../store';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

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
                {todos.map( todo => (
                    <ToDo {...todo} key={todo.id}/>
                ))}
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
        addTodo: (text) => dispatch(add(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
