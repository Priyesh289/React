import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            if (state == 0) return state;
            return state - 1;
        default:
            throw new Error("Invalid actions")    
    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    const handleInc = () => {
        dispatch({ type: "INC" })
    }
    const handleDec = () => {
        dispatch({ type: "DEC" })
    }

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
    )
}

export default Counter