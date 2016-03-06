import { Meteor } from 'meteor/meteor'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList.jsx'
import { Todos } from '/lib/collections'
import { connectMeteor } from 'connect-meteor'
const getVisibleTodos = (todos, filter) => {
    console.log('FILTER', filter)
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
        return todos
  }
}

const mapStateToProps = (state) => {
    console.log(state)
  return {
      visibilityFilter: state.visibilityFilter
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const subscribe = (props) => { // eslint-disable-line no-unused-vars
    return { todos: Meteor.subscribe('todos') }
}

const mapMeteorDataToProps = (props, subscriptions) => {
    return {
        loading: !subscriptions.todos.ready(),
        todos: getVisibleTodos(Todos.find({}).fetch(), props.visibilityFilter)
    }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectMeteor(subscribe, mapMeteorDataToProps)(TodoList))

export default VisibleTodoList