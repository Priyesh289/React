import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case "DEC":
            if (state == 0) return 0;
            return state - 1;
        default:
            throw new Error("Action Invalid");
    }
}



const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    const handleInc = () => {
        dispatch({ type: 'INC' })
    };
    const handleDec = () => {
        dispatch({ type: "DEC" })
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
        </div>
    )
}

export default Counter