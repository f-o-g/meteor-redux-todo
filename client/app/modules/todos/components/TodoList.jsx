import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClick }) => {
    console.log("TODOS", todos)
    return (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo._id}
        {...todo}
        onClick={() => onTodoClick(todo._id)}
      />
    )}
  </ul>
)}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList