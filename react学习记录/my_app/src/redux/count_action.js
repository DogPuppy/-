// actionCreater
import {INCREMENT,DECREMENT} from './constant'
const createIncrementAction=data=>({type:INCREMENT,data})
const createDecrementAction=(data)=>({type:DECREMENT,data})
const createIncrementAsyncAction=(data,time)=>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },time)
  }
}
export {createIncrementAction,createDecrementAction,createIncrementAsyncAction}