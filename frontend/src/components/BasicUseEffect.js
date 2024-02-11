import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState('')

  useEffect(() => {
    console.log('useEffect invoked')
  } ,[count])

  return (
    <div>
      <button onClick={() => setCount(prevCount=>prevCount+1)}>Click {count}</button>
      <input type='text' value={item} onChange={event=> setItem(event.target.value)} />
    </div>
  )
}

export default BasicUseEffect
