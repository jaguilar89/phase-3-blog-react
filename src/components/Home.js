import React from "react";
import Header from "./Header";
import PostContainer from "./PostContainer";

export default function Home({ posts, setPosts }) {
    return (
        <>
            <PostContainer posts={posts} setPosts={setPosts}/>
        </>
    )
}