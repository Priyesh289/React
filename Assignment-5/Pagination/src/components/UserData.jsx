import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../context/PostContext';
import SearchItem from './SearchItem';
import SortPost from './SortPost';

const UserData = () => {
    const { postData, setPostData, searchPost, sortType } = useContext(PostContext);

    const UserPost = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
            const data = await response.json();
            setPostData(data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()
    const [selectUser, setSelectUser] = useState(null);

    const itemLimit = 10;

    const startIndex = (page - 1) * itemLimit;
    const endIndex = page * itemLimit;

    const paginatedData = postData.slice(startIndex, endIndex);



    /*
    const filterData = postData.filter((post) =>
        post.id.toString().includes(searchPost)
    )
    */

    //Filter
    const filterData = searchPost
        ? postData.filter((post) => post.id === Number(searchPost))
        : paginatedData;



    //Sorting
    if (sortType === 'asc') {
        filterData.sort((a, b) => a.id - b.id)
    } else if (sortType === 'desc') {
        filterData.sort((a, b) => b.id - a.id)
    }

    //Show post info b 
    function infoClick(ele) {
        if (selectUser?.id === ele.id) {
            setSelectUser(null)
        } else {
            setSelectUser(ele)
        }

    }

    useEffect(() => {
        UserPost()
    }, [page])

    return (
        <div className=''>
            <div className="text-3xl font-bold text-center">Page-{page}</div>

            <div className='flex justify-between '>
                <SortPost />
                <SearchItem />
            </div>


            <div className=''>
                {loading ? (
                    <p className='text-center font-semibold my-10'>Loading....</p>
                ) : (
                    filterData.map((ele) => (
                        <div key={ele.id}>
                            <p
                                onClick={() => infoClick(ele)}
                                className="cursor-pointer bg-white shadow-md rounded-xl p-4 m-2 hover:scale-99 transition-transform duration-300">
                                <span className='font-bold'>Name : </span>{ele.name}
                            </p>
                            {selectUser?.id === ele.id && (
                                <div className="cursor-pointer bg-white shadow-md rounded-xl p-4 m-2 hover:scale-99 transition-transform duration-300">
                                    <p><b>Id : </b>{selectUser.id}</p>
                                    <p><b>Post-Id : </b>{selectUser.postId}</p>
                                    <p><b>Email : </b>{selectUser.email}</p>
                                    <p><b>Body : </b>{selectUser.body}</p>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
                <button
                    className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-200 hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setPage(prev => prev - 1)}
                    disabled={page === 1}
                >
                    Prev
                </button>

                <p className="text-lg font-semibold">{page}</p>

                <button
                    className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setPage(prev => prev + 1)}
                >
                    Next
                </button>
            </div>



        </div>

    )
}

export default UserData