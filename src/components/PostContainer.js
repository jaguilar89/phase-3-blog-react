import React, { useEffect, useState } from "react";
import Post from "./Post";
import { generatePath, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Header, Button } from "semantic-ui-react";

export default function PostContainer() {
    // state for posts goes here
    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:9292/posts')
            const data = await res.json()
            setPosts(data)
        })()
    }, [])

    const displayedPosts = posts.map((post) => (
        <li key={post.id}>
            <Link to=
                {`/posts/${post.title}`}
                state={{
                    postTitle: post.title,
                    body: post.body
                }}
            >
                {post.title}
            </Link>
        </li>
    ))

    return (
        <div id="post-container">
            <Routes>
                <Route path='/posts/:title' element={<Post />} />
            </Routes>

            <Header size="huge">Post Container</Header>
            <Button content='Add new post' labelPosition='left' icon='pencil alternate icon' primary />
            {displayedPosts}
        </div>
    )
}