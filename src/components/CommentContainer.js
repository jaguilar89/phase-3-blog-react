import React from "react";
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default function CommentContainer() {
    return (
        <div id="comment-container">
            <Header size="huge">Comments</Header>
            <Comment.Group>
                <Comment>
                    <Comment.Content>
                        <Comment.Author>Joe Schmoe</Comment.Author>
                        <Comment.Metadata>
                            <div>1 day ago</div>
                        </Comment.Metadata>
                        <Comment.Text>
                            <p>
                                This is a comment.
                            </p>
                        </Comment.Text>
                    </Comment.Content>
                </Comment>
                <Comment>
                    <Comment.Content>
                        <Comment.Author>John Smith</Comment.Author>
                        <Comment.Metadata>
                            <div>2 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>I re-tweeted this.</Comment.Text>
                    </Comment.Content>
                </Comment>

                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Group>
        </div>
    )
}