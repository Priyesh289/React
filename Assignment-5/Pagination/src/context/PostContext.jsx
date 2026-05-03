import { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
    const [postData, setPostData] = useState([]);
    const [searchPost, setSearchPost] = useState('');
    const [sortType, setSortType] = useState('')


    const value = {
        postData, setPostData, searchPost, setSearchPost,
        sortType, setSortType
    }

    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider