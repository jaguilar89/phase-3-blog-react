import React, { useState } from "react";
import { Header, Form, Button, Comment } from "semantic-ui-react";

export default function CommentForm({ postID, comments, setComments }) {
    const [commentData, setCommentData] = useState({
        name: "",
        body: "",
        post_id: null
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setCommentData({
            ...commentData,
            [name]: value,
            post_id: postID
        })
    }

    async function handleSubmitComment(e) {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:9292/comments/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentData)
            })
            const newComment = await res.json();
            setComments([...comments, newComment])
        } catch (error) {
            console.log(error)
        }
        e.target.reset();
    }

    return (
        <>
            <Comment.Group>
                <Header as="h3" dividing>
                    Comments
                </Header>
                <Form reply onSubmit={handleSubmitComment}>
                    <Form.Field>
                        <input name="name" placeholder="Name" onChange={handleChange} />
                    </Form.Field>
                    <Form.TextArea name="body" placeholder="Comment" onChange={handleChange} />
                    <Button content='Add Comment' labelPosition='left' icon='pencil alternate' primary />
                </Form>
            </Comment.Group>
        </>
    )
}