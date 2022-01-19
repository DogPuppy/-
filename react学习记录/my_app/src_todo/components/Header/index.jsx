import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import header from './index.module.css'

export default class Header extends Component {

  static propTypes={
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp = (e) => {
    const { keyCode, target } = e
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)
    target.value = ''
  }


  render() {
    return (
      <div>
        <input type='text' className={header.input} placeholder='请输入准备完成的任务' onKeyUp={this.handleKeyUp}></input>
      </div>
    )
  }
}
