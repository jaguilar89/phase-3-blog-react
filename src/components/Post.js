import React from "react";
import CommentContainer from "./CommentContainer";
import { Container, Header, Button } from "semantic-ui-react";
import { useLocation, useParams } from "react-router-dom";

export default function Post() {
    const { title } = useParams();
    const location = useLocation();
    const { postTitle, body } = location.state;
    console.log('hello from Post.js')

    return (
        <div className="post">
            <Container text>
                <Header as='h1'>Title</Header>
                <h1>{postTitle}</h1>
                <p>
                    {body}
                </p>
                <Button content='Edit Post' labelPosition='left' icon='edit' secondary />
                <Button content='Delete Post' labelPosition='left' icon='trash' secondary />
            </Container>
            <Header size="huge">Comments</Header>
            
            <CommentContainer />
        </div>
    )
}