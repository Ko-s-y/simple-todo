import React, {useReducer} from 'react'

const initialState = 0
const reducer = (currentState, action) => {
  switch(action) {
    case 'add_1':
      return currentState += 1;
    case 'multiple':
      return currentState * 3;
    case 'reset':
      return initialState;
    default:
      return currentState;
  }
}

const BasicReducer = () => {
  return (
    <div>BasicReducer</div>
  )
}

export default BasicReducer
