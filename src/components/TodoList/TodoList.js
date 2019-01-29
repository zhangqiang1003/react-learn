import React from 'react'
import PropTypes from 'prop-types' // 对组件的props进行类型检查，比如该组件的todos和onTodoClick两个参数
import Todo from '../Todo/Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul id-data="asdfasdf">
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
)
// 类型检查
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
