import { createStore } from 'redux';

const toDos = [];

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state=[], action) => {
  // NEVER NUTATE STATE!!
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}
const store = createStore(reducer);

store.subscribe( ()=>{
  console.log('change someting')
  ul.innerText = '';
  store.getState().map( (todo) => {
    let li = document.createElement('li');
    li.innerText = todo.text;
    ul.appendChild(li);
  })
  
} )

const onSubmit = (e) => {
  e.preventDefault();
  store.dispatch({type: ADD_TODO, text: input.value})
  input.value="";
}

form.addEventListener("submit", onSubmit);
