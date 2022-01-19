import React,{Component} from 'react'
import Count from './containers/Count'
import app from './App.module.css'

export default class App extends Component{

  render(){
    return(
      <div className={app.wrapper}>
        <Count/>
      </div>
    )
  }
}
  