import React, { Component } from 'react'
import footer from './index.module.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  static propTypes={
    checkAllTodo:PropTypes.func.isRequired,
    clearAllDone:PropTypes.func.isRequired,
  }
  handleCheakAll=(e)=>{
    this.props.checkAllTodo(e.target.checked)
  }
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
  render() {
    const {toDos} = this.props
    const doneCount =toDos.reduce((pre,todo)=> pre+(todo.done?1:0),0)
    const total = toDos.length
    return (
      <div>
        <label>
          <input type="checkbox" onChange={this.handleCheakAll} checked={doneCount===total && total!==0?true:false}/>
        </label>
        <span>
          <span className={footer.span}>已完成{doneCount}/</span><span>全部{total}</span>
        </span>
        <button onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
