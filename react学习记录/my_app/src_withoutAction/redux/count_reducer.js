export default function countReducer(preState=0, action) {
  console.log(preState);
  const {
    type,
    data
  } = action
  switch (type) {
    case 'INCREMENT':
      return preState+data
    case 'DECREMENT':
      return preState-data
    default:
      return preState
  }
}