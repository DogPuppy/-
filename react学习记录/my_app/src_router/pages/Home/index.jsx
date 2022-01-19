import React, { Component } from 'react'
import { useLocation,useParams } from 'react-router-dom' 

function myComponent(Component){
  return (props)=>{
    // let location = useLocation()
    // const state=location.state||{}
    // const params={
    //   id:state.id,
    //   age:state.age
    // }
    let params=useParams()
    return <Component {...props} params={params}></Component>
  }
}

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>我是Home内容{this.props.params.id}</h1>
      </div>
    )
  }
}
export default myComponent(Home)