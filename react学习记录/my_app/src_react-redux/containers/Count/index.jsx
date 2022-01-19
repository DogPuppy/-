import React,{Component} from 'react';
import { connect } from 'react-redux'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';

class Count extends Component {
  ref = React.createRef()
  increment=()=>{
    const value=this.ref.current.value
    this.props.inc(value*1)
  }
  decrement=()=>{
    const value=this.ref.current.value
    this.props.dec(value*1)
  }
  incrementIfOdd=()=>{
    const value=this.ref.current.value
    if(this.props.count%2!==0){
      this.props.inc(value*1)
    }
  }
  incrementAsync=()=>{
    const value=this.ref.current.value
    this.props.incAsync(value*1,1000)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>求和为{this.props.count}</h2>
        <select ref={this.ref} name='value'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count:state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    inc:(value)=>dispatch(createIncrementAction(value)),
    dec:(value)=>dispatch(createDecrementAction(value)),
    incAsync:(value,time)=>dispatch(createIncrementAsyncAction(value,time)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)

