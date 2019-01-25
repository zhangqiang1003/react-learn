import React from 'react'
import Footer from '../Footer/Footer'
import AddTodo from '../../containers/AddTodo/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'


class AppTest extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        1
      </div>
    )
  }
}

export default AppTest;