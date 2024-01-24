import React, { useState } from 'react'

const Basic1 = (props) => {
  const clickHandler = () => {
    console.log('Button clicked')
  }

  const [count, setCount] = useState(0)

  return (
    <>
      {/* <button onClick={() => setCount(count+1)}>Click {count}</button> */}
      <button onClick={() => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1);} }>Click {count}</button>
      <h1>Hello { props.name }</h1>
    </>
  )
}

export default Basic1
