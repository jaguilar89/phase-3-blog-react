import React from "react";
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default function PostComment() {
    return (
        <>
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
            </Comment.Group>
        </>
    )
}