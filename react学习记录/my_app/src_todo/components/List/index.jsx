import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

export default class List extends Component {
  static propTypes={
    toDos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
  }
  render() {
    const { toDos, updateTodo,deleteTodo } = this.props
    return (
      <ul>
        {toDos.map((todo) => {
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>
        })}
      </ul>
    )
  }
}
