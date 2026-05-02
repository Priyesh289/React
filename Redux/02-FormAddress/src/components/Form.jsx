import React, { useReducer, useState } from 'react'

const initState = {
    name: '',
    age: '',
    gender: '',
    address: {
        building: '',
        houseNo: '',
        city: '',
        Pin: ''
    }
}

function reducer(state, { type, payload }) {
    switch (type) {
        case 'UPDATE_NAME':
        case 'UPDATE_AGE':
        case 'UPDATE_GENDER': {
            return {
                ...state,
                ...payload
            }
        }
        case "UPDATE ADDRESS BUILDING NAME":
            return {
                ...state,
                address: {
                    ...state.address,
                    ...payload
                }
            }

        case "UPDATE ADDRESS HOUSE":
            return {
                ...state,
                address: {
                    ...state.address,
                    ...payload
                }
            }
        case "UPDATE ADDRESS CITY NAME":
            return {
                ...state,
                address: {
                    ...state.address,
                    ...payload
                }
            }

    }
}

const Form = () => {
    const [formState, dispatch] = useReducer(reducer, initState);

    const {
        name,
        age,
        gender,
        address: {
            building,
            houseNo,
            city,
            Pin
        }
    } = formState

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label >
                    name
                    <input type="text"
                        value={name}
                        id='name'
                        placeholder='Enter your name'
                        onChange={(e) => {
                            dispatch({
                                type: 'UPDATE_NAME',
                                payload: {
                                    [e.target.id]: e.target.value
                                }
                            })
                        }}
                    />
                </label>
                <label >
                    age
                    <input type="text"
                        id='age'
                        placeholder='Age'
                        value={age}
                        onChange={(e) => {
                            dispatch({
                                type: 'UPDATE_AGE',
                                payload: {
                                    [e.target.id]: e.target.value
                                }
                            })
                        }} />
                </label>
                <label >
                    Gender
                    <select name="" id="gender"
                        value={gender}
                        onChange={(e) => {
                            dispatch({
                                type: 'UPDATE_GENDER',
                                payload: {
                                    [e.target.id]: e.target.value
                                }
                            })
                        }}>
                        <option value="">select</option>
                        <option value="male">Male</option>
                        <option value="female">feale</option>
                    </select>
                </label>
                <br />
                <label>
                    Address- building
                    <input type="text"
                        id='building'
                        value={building}
                        placeholder='Enter Building or socity Name'
                        onChange={
                            (e) => {
                                dispatch({
                                    type: "UPDATE ADDRESS BUILDING NAME",
                                    payload: {
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }
                        } />
                </label>
                <label >
                    House No-
                    <input
                        type="text"
                        id='houseNo'
                        value={houseNo}
                        onChange={
                            (e) =>
                                dispatch({
                                    type: "UPDATE ADDRESS HOUSE",
                                    payload:{
                                        [e.target.id]: e.target.value
                                    }
                                })
                        }
                    />
                </label>
                <label >
                    city
                    <input type="text" name="" id="city"
                        placeholder='city Name'
                        onChange={(e) =>
                            dispatch({
                                type: "UPDATE ADDRESS CITY NAME",
                                [e.target.id]: e.target.value
                            })
                        } />
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form