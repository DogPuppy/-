import React,{Component} from 'react'
import Search  from './components/Search'
import List  from './components/List'

import app from './App.module.css'
export default class App extends Component{
  state = {
    items:[],
    isFirst:true,
    isLoading:false,
    err:''
  }
  updateAppState=(stateOBj)=>{
    this.setState(stateOBj)
  }

  render(){
    return(
      <div className={app.wrapper}>
        <Search updateAppState={this.updateAppState} />
        <List {...this.state}/>
      </div>
    )
  }
}
  