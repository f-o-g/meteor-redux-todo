import React from 'react'
// import Header from '/client/app/modules/layout/components/Header.jsx'
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App