import { createStore } from 'redux';

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state=0) => {
  // reducer function
  // - modify state
  return state;
};
const countStore = createStore(countModifier);  //create store
console.log(countStore.getState())