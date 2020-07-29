import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
    return {
        type: ADD,
        text
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case ADD:
            return [ {text: action.text, id: Date.now()}, ...state]
        case DELETE:
            return state.filter( todo => todo.id !== action.id );
        default :
            return state;
    }
}
const store = createStore(reducer);

store.subscribe( () => {
    console.log('some thing is changed');
    // 변화 시켜야하는 elements를 찾아서 
    // 직접 dom을 수정하는 작업을 하지 않아도 된다.
    // react-redux가 해준다.

    // react와 redux store를 연결시키는 작업은 
    // index.js에서 <Provider/>를 통해 이루어진다.
})

export const actionCreators = {
    addTodo,
    deleteTodo
}

export default store;