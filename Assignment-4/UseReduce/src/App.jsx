import React, { useReducer } from 'react'

const App = () => {
  function reduce(state, action) {
    switch (action.type) {
      case "INC":
        return state+1;
      case "DEC":
        if(state ==0) return 0;
        return state-1
        
      default:
        throw new Error;  
    }

  }

  const [count, dispatch] = useReducer(reduce, 0);

  const handleInc = () => { 
    dispatch({type:'INC'})
  }
  const handleDec = () => { 
    dispatch({type:'DEC'})
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  )
}

export default App