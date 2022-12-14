import React, { useState } from "react";
import NewPostForm from "./NewPostForm";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default function PostContainer({ posts, setPosts }) {
    const [formIsShown, setFormIsShown] = useState(false)

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
                    postID: post.id,
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
            <Header size="huge">Posts</Header>
            <Button content={formIsShown ? 'Close' : 'Add New Post'} labelPosition='left' icon='pencil alternate' primary onClick={handleShowForm} />
            {formIsShown && <NewPostForm onSubmitPost={handleAddPost} />}
            {displayedPosts}
        </div>
    )
}