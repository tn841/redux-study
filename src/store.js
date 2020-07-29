import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit'


const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

// const reducer = (state=[], action) => {
//     switch (action.type) {
//         case addTodo.type:
//             return [ {text: action.payload, id: Date.now()}, ...state]
//         case deleteTodo.type:
//             return state.filter( todo => todo.id !== action.payload );
//         default :
//             return state;
//     }
// }

const reducer = createReducer([], {
    [addTodo] : (state, action) => {
        state.push({text: action.payload, id: Date.now()})
    }, // state를 mutate 하고 아무것도 return 하지 않거나
    [deleteTodo]: (state, action) => state.filter( todo => todo.id !== action.payload )
        // state를 immutate하고 새로운 state를 return 한다.
})
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