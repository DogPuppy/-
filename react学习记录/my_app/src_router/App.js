import React,{Component} from 'react'
import { Route,Link, Routes,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Message from "./pages/About/Message";
import app from './App.module.css'

export default class App extends Component{
  state={id:1,age:15}
  render(){
    return(
      <div className={app.wrapper}>
        <h1>React Router Dom</h1>
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
        {/* <Link to={`about/message/1`}>message</Link>
         */}
        {/* <Link to={`about/message/?id=${this.state.id}&age=${this.state.age}`}>message</Link> */}
        <Link to={`about/message`} state={{id:this.state.id,age:this.state.age}}>message</Link>

        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about/' element={<About/>}>
              <Route path='message' element={<Message/>}/>
              <Route path='*' element={<Navigate to='/about/message'/>}/>
            </Route>
            <Route path='*' element={<Navigate to='/about'/>}/>
        </Routes>
      </div>
    )
  }
}
  