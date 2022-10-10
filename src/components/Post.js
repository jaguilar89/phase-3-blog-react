import React from "react";
import CommentContainer from "./CommentContainer";
import { Container, Header, Button } from "semantic-ui-react";
import { useLocation, useParams } from "react-router-dom";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export default function Post() {
    const { id } = useParams();
    const location = useLocation();
    const { postTitle, body } = location.state;

    return (
        <div className="post">
            <Container text>
                <Header as='h1'>{postTitle}</Header>
                <p>
                    {body}
                </p>
            </Container>
            <Button content='Edit Post' labelPosition='left' icon='edit' secondary />
            <Button content='Delete Post' labelPosition='left' icon='trash' secondary />
            <Header size="huge">Comments</Header>

            <CommentContainer />
        </div>
    )
}