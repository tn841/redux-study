import { createStore } from 'redux';

const toDos = [];

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const dispatchAddToDo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}
const dispatchDeleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state=[], action) => {
  // NEVER NUTATE STATE!!
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE_TODO:
      return state.filter( todo => todo.id !== parseInt(action.id) )
    default:
      return state;
  }
}
const store = createStore(reducer);

const deleteTodo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(dispatchDeleteToDo(id))
}

store.subscribe( ()=>{
  ul.innerText = '';
  store.getState().map( (todo) => {
    let li = document.createElement('li');
    li.id = todo.id
    li.innerText = todo.text;

    const btn = document.createElement('button');
    btn.innerText = 'del';
    btn.addEventListener('click', deleteTodo);
    li.appendChild(btn)
    ul.appendChild(li);
  })
  
} )

const onSubmit = (e) => {
  e.preventDefault();
  store.dispatch(dispatchAddToDo(input.value))
  input.value="";
}

form.addEventListener("submit", onSubmit);
