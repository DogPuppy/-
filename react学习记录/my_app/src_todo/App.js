import React,{Component} from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component{
  state = {toDos:[
    {id:"001",name:'吃饭',done:false},
    {id:"002",name:'敲代码',done:true},
    {id:"003",name:'打豆豆',done:false},
  ]}
  addTodo=(todoObj)=>{
    const {toDos} =this.state
    this.setState({toDos:[todoObj,...toDos]})
  }
  updateTodo=(id,done)=>{
    const {toDos}=this.state
    const newTodos = toDos.map((todo)=>{
      if(todo.id === id){
        return {...todo,done}
      }else{
        return todo
      }
    })
    this.setState({toDos:newTodos})
  }
  deleteTodo=(id)=>{
    const {toDos} = this.state
    const newTodo=toDos.filter((todo)=>{
      return todo.id!==id
    })
    this.setState({toDos:newTodo})
  }
  checkAllTodo=(done)=>{
    const {toDos}= this.state
    const newTodos =toDos.map((todo)=>{
      return {...todo,done}
    })
    this.setState({toDos:newTodos})
  }
  clearAllDone=()=>{
    const {toDos} = this.state
    const newTodos = toDos.filter(todo=>todo.done===false)
    this.setState({toDos:newTodos})
  }
  render(){
    const {toDos} = this.state
    return(
      <div className='app'>
        <Header addTodo={this.addTodo}/>
        <List toDos={toDos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer toDos={toDos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}
  