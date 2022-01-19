import React, { Component } from 'react'
import { useParams,useSearchParams,useLocation,useNavigate } from 'react-router-dom'

function myWithRouter(Detail) {
  return (props)=>{
    // let [searchParams]=useSearchParams()
    // console.log('searchParams',searchParams);
    let location =useLocation()
    const stateObj=location.state||{}
    const params={
      id:stateObj.id,
      age:stateObj.age,
    }
    return <Detail {...props} params={params} navigate={useNavigate()}></Detail>
  } 
}

class Message extends Component {
  // go=()=>{
  //   this.props.navigate('/home',{
  //     state:{id:1,age:2}
  //   })
  // }
  go=()=>{
    this.props.navigate('/home')
  }
  back=()=>{
    this.props.navigate(-1)
  }
  render() {
    return (
      <div>
        <button onClick={this.go}>前进</button>
        <button onClick={this.back}>后退</button>
      </div>
    )
  }
}

export default myWithRouter(Message)