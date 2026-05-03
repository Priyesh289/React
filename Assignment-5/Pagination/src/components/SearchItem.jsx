import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'

const SearchItem = () => {
    const { searchPost, setSearchPost } = useContext(PostContext)

    return (
        <div  className='flex justify-end '>
            <input
                type='text'
                placeholder='search by Id'
                value={searchPost}
                onChange={(e) => setSearchPost(e.target.value)}
                className="bg-white m-2 w-96 px-4 py-2 border border-gray-500 rounded-xl 
                   shadow-sm focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500 
                   transition duration-200"
            />
        </div>
    )
}

export default SearchItem