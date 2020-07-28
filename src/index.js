import { createStore } from 'redux';

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

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

const onChange = () => {
  number.innerText = countStore.getState();
  console.log(countStore.getState());

}
countStore.subscribe(onChange)

plus.addEventListener('click', () => countStore.dispatch({type: 'PLUS'}))
minus.addEventListener('click', () => countStore.dispatch({type: 'MINUS'}))

