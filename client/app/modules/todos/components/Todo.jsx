import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, name }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {name}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Todo