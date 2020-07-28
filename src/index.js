import { createStore } from 'redux';

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const PLUS = "ADD";
const MINUS = "MINUS";

const countModifier = (state=0, action) => {
  // reducer function
  // - modify state
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};
const countStore = createStore(countModifier);  //create store

const onChange = () => {
  number.innerText = countStore.getState();
  console.log(countStore.getState());

}
countStore.subscribe(onChange)

plus.addEventListener('click', () => countStore.dispatch({type: PLUS}))
minus.addEventListener('click', () => countStore.dispatch({type: MINUS}))

