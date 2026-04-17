import React, { useReducer } from 'react'

const initState = {
    name: '',
    age: "",
    gender: "",
    address:{
        building:'',
        street:''
    }
}

function reducer(state, { type, payload }) {
    switch (type) {
        case 'UPDATE_NAME':
        case "UPDATE_AGE":
        case "UPDATE_GENDER": {
            return {
                ...state,
                ...payload
            }
        }

    }
}

const Form = () => {
    const [userDetails, dispatch] = useReducer(reducer, initState);

    const { name,
        age,
        gender
    } = userDetails

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userDetails)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    name:
                    <input type="text" id='name' value={name} onChange={(e) => {
                        dispatch({
                            type: 'UPDATE_NAME',
                            payload: {
                                [e.target.id]: e.target.value
                            }
                        })
                    }} />
                </label>
                <label htmlFor="">
                    age:
                    <input type="text" id='age' value={age} onChange={(e) => {
                        dispatch({
                            type: 'UPDATE_AGE',
                            payload: {
                                [e.target.id]: +e.target.value
                            }
                        })
                    }} />
                </label>
                <label htmlFor="">
                    Gender:
                    <select name="" id="gender" value={gender} onChange={(e) => {
                        dispatch({
                            type: "UPDATE_GENDER",
                            payload: {
                                [e.target.id]: e.target.value
                            }
                        })
                    }}>
                        <option value="">---Select Gender---</option>
                        <option value="male">Male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form