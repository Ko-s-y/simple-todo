import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const CompC = () => {
  const { dispatchProvided } = useContext(AppContext)

  return (
    <div>
      <button onClick={() => dispatchProvided('add_1')} >Add + 1</button>
      <button onClick={() => dispatchProvided('multiple')}>Multiple * 3</button>
      <button onClick={() => dispatchProvided('reset')}>Reset</button>
    </div>
  )
}

export default CompC
