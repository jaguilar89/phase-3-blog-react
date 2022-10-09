import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

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
                {`/posts/${post.id}`}
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
            <Header size="huge">Post Container</Header>
            <Button content='Add new post' labelPosition='left' icon='pencil alternate' primary />
            {displayedPosts}
        </div>
    )
}