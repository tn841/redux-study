import { createStore } from 'redux';

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state=0, action) => {
  // reducer function
  // - modify state
  
  if (action.type === "PLUS"){
    return state + 1;
  } else if (action.type === 'MINUS') {
    return state - 1;
  }
  return state;
};
const countStore = createStore(countModifier);  //create store
console.log(countStore.getState())


// store의 dispatch 메소드를 통해
// 상태를 변경 할 수 있다.
countStore.dispatch({type: 'PLUS'})  
countStore.dispatch({type: 'PLUS'})  
countStore.dispatch({type: 'PLUS'})  
countStore.dispatch({type: 'PLUS'})  
countStore.dispatch({type: 'MINUS'})  
console.log(countStore.getState())