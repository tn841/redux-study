import { configureStore, createSlice } from '@reduxjs/toolkit'


const toDo = createSlice({
    name:' toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
                    state.push({text: action.payload, id: Date.now()})
                },
        remove: (state, action) => state.filter( todo => todo.id !== action.payload )
    }
})

export const {add, remove} = toDo.actions;

export default configureStore({reducer: toDo.reducer});