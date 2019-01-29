import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ACTIVE } = VisibilityFilters

function visibilityFilter(state = SHOW_ACTIVE, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      state = action.filter
      return state
    default:
      return state
  }
}

function todos(state = [], action) { // 这里return 一个新的state
  switch (action.type) {
    case ADD_TODO:
      state = [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
      console.log(state);
      return state
    case TOGGLE_TODO:
      state = state.map((todo, index) => { // 这里return 一个新的state
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
      return state;
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp