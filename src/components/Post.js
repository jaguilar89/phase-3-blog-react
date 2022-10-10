import React, { useState } from "react";
import CommentContainer from "./CommentContainer";
import { Container, Header, Button } from "semantic-ui-react";
import { useLocation, useParams } from "react-router-dom";

export default function Post() {
    const { id } = useParams();
    const location = useLocation();
    const { postTitle, postBody } = location.state;
    const [inEditMode, setInEditMode] = useState(false)
    const [editedBody, setEditedBody] = useState({ body: postBody })
    
    function handleClickEditPost() {
        setInEditMode((inEditMode) => !inEditMode)
    }

    function handleSubmitChange() {
        setEditedBody()
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
            <Button content={inEditMode ? 'Submit Changes' : 'Edit'} labelPosition='left' icon='edit' primary onClick={handleClickEditPost} />
            {inEditMode && <Button content='Cancel Edit' labelPosition='left' icon='cancel' secondary onClick={handleClickEditPost} />}
            <Button content='Delete Post' labelPosition='left' icon='trash' secondary />

            <Header size="huge">Comments</Header>

            <CommentContainer />
        </div>
    )
}