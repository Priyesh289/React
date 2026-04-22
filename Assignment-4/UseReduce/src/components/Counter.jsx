import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "INCREASE_COUNT":
            return state + 1
        case 'DECREASE_COUNT':
            if (state == 0) return 0
            return state - 1
        default:
            throw new Error('limit exceeding')
    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    function handleInc(){
        dispatch({type:"INCREASE_COUNT"})
    }
    function handleDec(){
        dispatch({type:'DECREASE_COUNT'})
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Inc</button>
        </div>
    )
}

export default Counter