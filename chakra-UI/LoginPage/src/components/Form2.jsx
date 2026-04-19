import React, { useReducer } from 'react'

const initState = {
    user: "",
    age: '',
    address: {
        building: "",
        street: '',
        nearPlace: ""
    }

}

function reducer(state, { type, payload }) {
    switch (type) {
        case 'UPDATE_FIELD': {
            return {
                ...state,
                ...payload
            }
        }

        case 'UPDATE_ADDRESS': {
            return {
                ...state,
                address: {
                    ...state.address,
                    ...payload
                }
            }
        }

    }
}


const Form2 = () => {

    const [userDetails, dispatch] = useReducer(reducer, initState);

    const {
        user,
        age,
        address: {
            building,
            street,
            nearPlace
        }
    } = userDetails;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userDetails)
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label >
                    user:
                    <input type="text" id='user' value={user} onChange={(e) => {
                        dispatch({
                            type: 'UPDATE_FIELD',
                            payload: { [e.target.id]: e.target.value }
                        })
                    }
                    } />
                </label>
                <label htmlFor="">
                    age:
                    <input type="text" id='age' value={age} onChange={(e) => {
                        dispatch({
                            type: 'UPDATE_FIELD',
                            payload: {
                                [e.target.id]: +e.target.value
                            }
                        })
                    }} />
                </label>
                <label htmlFor="">
                    address:
                    <input type="text"
                        id='building'
                        placeholder='buidling name'
                        value={building}
                        onChange={(e) => {
                            dispatch({
                                type: 'UPDATE_ADDRESS',
                                payload: { [e.target.id]: e.target.value }
                            })
                        }} />
                </label>
                <label htmlFor="">
                    street:
                    <input type="text"
                        id='street'
                        placeholder='street Name'
                        value={street}
                        onChange={(e) => {
                            dispatch({
                                type: 'UPDATE_ADDRESS',
                                payload: { [e.target.id]: e.target.value }
                            })
                        }} />
                </label>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Form2