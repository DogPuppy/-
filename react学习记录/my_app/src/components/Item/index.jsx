import React, { Component } from 'react'
import item from './index.module.css'
export default class Item extends Component {
  state = { mouse: false }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }
  handleDelete=(id)=>{
    if(window.confirm('是否确认删除')){
      this.props.deleteTodo(id)
    }
    
  }
  render() {
    const { mouse } = this.state
    const { id, name, done } = this.props
    return (
      <li className={`${item.liwrapper} ${mouse ? item.highlight : item.gray}`} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span className={item.span}>{name}</span>
          <button className={`${mouse ? '' : item.disappear}`} onClick={()=>{this.handleDelete(id)}}>删除</button>
        </label>
      </li>
    )
  }
}
