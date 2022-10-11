import React, { useState } from "react";
import CommentContainer from "./CommentContainer";
import { Container, Header, Button } from "semantic-ui-react";
import { useLocation, useParams } from "react-router-dom";

export default function Post({ posts, setPosts }) {
    const { id } = useParams();
    const location = useLocation();
    const { postID, postTitle, postBody } = location.state;
    const [inEditMode, setInEditMode] = useState(false)
    const [editedBody, setEditedBody] = useState({ body: postBody })

    function handleClickEditPost() {
        setInEditMode((inEditMode) => !inEditMode)
    }

    async function handleSubmitChange(e) {
        e.preventDefault();
        try {
            (async () => {
                const res = await fetch(`http://localhost:9292/posts/${postID}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(editedBody)
                })
                const updatedPost = await res.json();

            })()
        } catch(error) {
            console.log(error)
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setEditedBody({
            ...editedBody,
            [name]: value
        })
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
            <Button content={inEditMode ? 'Submit Changes' : 'Edit'} labelPosition='left' icon='edit' primary onClick={inEditMode ? handleSubmitChange : handleClickEditPost} />
            {inEditMode && <Button content='Cancel Edit' labelPosition='left' icon='cancel' secondary onClick={handleClickEditPost} />}
            <Button content='Delete Post' labelPosition='left' icon='trash' secondary />

            <Header size="huge">Comments</Header>

            <CommentContainer />
        </div>
    )
}