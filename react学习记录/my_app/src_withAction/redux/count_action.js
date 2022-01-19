// actionCreater
import {INCREMENT,DECREMENT} from './constant'
const createIncrementAction=data=>({type:INCREMENT,data})
const createDecrementAction=(data)=>({type:DECREMENT,data})
export {createIncrementAction,createDecrementAction}