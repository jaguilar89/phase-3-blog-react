import React from "react";
import { Form, Button, Comment } from "semantic-ui-react";

export default function CommentForm() {
    return (
        <Comment.Group>
            <Form reply>
                <Form.TextArea />
                <Button content='Add Comment' labelPosition='left' icon='pencil alternate icon' primary />
            </Form>
        </Comment.Group>
    )
}