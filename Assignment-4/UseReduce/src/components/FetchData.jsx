import React, { use, useEffect, useReducer } from 'react'


const initState = {
    loading: false,
    data: [],
    err: false
}

const getData = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        throw new Error('Something went wrong while fetching')
    }

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_LOADING':
            return { loading: true, data: [], err: false }
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, err: false }
        case 'FETCH_ERROR':
            return { loading: true, data: [], err: true }
        default:
            throw new Error('Invalid action type')
    }
}

const FetchData = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    const fetchAndUpdate = (url) => {
        dispatch({ type: 'FETCH_LOADING' });
        getData(url)
            .then((res) => dispatch({ type: 'FETCH_SUCCESS', payload: res }))
            .catch((err) => dispatch({ type: 'FETCH_ERROR' }))
    }

    useEffect(() => {
        fetchAndUpdate('https://jsonplaceholder.typicode.com/todos?_limit=5')
    }, [])

    const { loading, data, err } = state;

    return loading ? (
        <h1>Loading...</h1>
    ) :
    err ? (
        <h1>somthing went wrong</h1>
    ):
    (
        <div>
            <h3>ToDo</h3>
            {data.map((e)=>(
                <p key={e.id}>{e.title}</p>
            ))}
        </div>
    )
}

export default FetchData