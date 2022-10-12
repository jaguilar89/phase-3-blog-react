import React, { createContext, useState, useEffect } from "react";

const PostContext = createContext();

function PostContextProvider({ children }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:9292/posts')
            const postList = await res.json()
            setPosts(postList)
        })()
    }, [posts])

    return <PostContext.Provider value={{posts, setPosts}}>{children}</PostContext.Provider>
}

export {PostContext, PostContextProvider}