import React, { use, useContext } from 'react'
import { PostContext } from '../context/PostContext'

const SortPost = () => {
    const { sortType, setSortType } = useContext(PostContext)
    return (

        <select name="" id=""
            onChange={(e) => setSortType(e.target.value)}
            className="bg-white m-2 w-30 px-2  border border-gray-500 rounded-xl 
                   shadow-sm focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500  text-black
                   transition duration-200">
            <option value="">select</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
        </select>

    )
}

export default SortPost