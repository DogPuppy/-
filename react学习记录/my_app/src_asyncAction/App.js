import React,{Component} from 'react'
import Count from './components/Count'
import app from './App.module.css'
import store from './redux/store'

export default class App extends Component{

  render(){
    return(
      <div className={app.wrapper}>
        <Count store={store}/>
      </div>
    )
  }
}
  