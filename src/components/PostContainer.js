import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import Post from "./Post";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default function PostContainer() {
    // state for posts goes here
    const [posts, setPosts] = useState([])
    const [formIsShown, setFormIsShown] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:9292/posts')
            const postList = await res.json()
            setPosts(postList)
        })()
    }, [])

    function handleShowForm() {
        setFormIsShown((formIsShown) => !formIsShown)
    }

    function handleAddPost(newPost) {
        setPosts([...posts, newPost])
        handleShowForm()
    }

    const displayedPosts = posts.map((post) => (
        <li key={post.id}>
            <Link to=
                {`/posts/${post.id}`}
                state={{
                    postTitle: post.title,
                    postBody: post.body
                }}
            >
                {post.title}
            </Link>
        </li>
    ))

    return (
        <div id="post-container">
            <Header size="huge">Post Container</Header>
            <Button content={formIsShown ? 'Close' : 'Add New Post'} labelPosition='left' icon='pencil alternate' primary onClick={handleShowForm} />
            {formIsShown && <NewPostForm onSubmitPost={handleAddPost} />}
            {displayedPosts}
        </div>
    )
}