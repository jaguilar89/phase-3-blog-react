import React, { useState } from "react";
import CommentContainer from "./CommentContainer";
import { Container, Header, Button } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Post({ posts, setPosts }) {
    const location = useLocation();
    const { postID, postTitle, postBody } = location.state;
    const [inEditMode, setInEditMode] = useState(false)
    const [editedBody, setEditedBody] = useState({ body: postBody })
    const navigate = useNavigate();


    function handleClickEditPost() {
        setInEditMode((inEditMode) => !inEditMode)
    }

    function updatePost(updatedPost) {
        const updatedPostList = posts.map((post) => {
            if (updatedPost.id === post.id) {
                return updatedPost
            } else {
                return post
            }
        });
        setPosts(updatedPostList)
    }

    function handleSubmitEdit(e) {
        e.preventDefault();
        try {
            (async () => {
                const res = await fetch(`http://localhost:9292/posts/${postID}}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(editedBody)
                })
                const updatedPost = await res.json();
                updatePost(updatedPost)
                if (res.ok) navigate("/")
            })()
        } catch(error) {
            console.log(error)
        }
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setEditedBody({
            ...editedBody,
            [name]: value
        })
    };

    function handleDeletePost(deletedPost) {
        const updatedPosts = posts.filter((post) => post.id !== deletedPost.id)
        setPosts(updatedPosts)
    }

    function handleClickDelete() {
        try {
            (async () => {
                const res = await fetch(`http://localhost:9292/posts/${postID}`, {
                    method: "DELETE"
                })
                const deletedPost = await res.json()
                handleDeletePost(deletedPost)
                if (res.ok) navigate("/")
            })()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="post">
            <Container text>
                <Header as='h1'>{postTitle}</Header>
                <p>
                    {inEditMode ?
                        <textarea
                            name='body'
                            style={{ height: '650px', width: '800px' }}
                            contentEditable={true}
                            defaultValue={postBody}
                            onChange={handleChange}
                        />
                        :
                        postBody
                    }
                </p>
            </Container>
            <Button content={inEditMode ? 'Submit Changes' : 'Edit'} labelPosition='left' icon='edit' primary onClick={inEditMode ? handleSubmitEdit : handleClickEditPost} />
            {inEditMode && <Button content='Cancel Edit' labelPosition='left' icon='cancel' secondary onClick={handleClickEditPost} />}
            <Button content='Delete Post' labelPosition='left' icon='trash' secondary onClick={handleClickDelete} />

            <Header size="huge">Comments</Header>

            <CommentContainer postID={postID}/>
        </div>
    )
}