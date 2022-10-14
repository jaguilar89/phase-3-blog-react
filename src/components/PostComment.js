import React from "react";
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default function PostComment({ name, comment }) {
    console.log(name)
    console.log(comment)
    return (
        <>
            <Comment.Group>
                <Comment>
                    <Comment.Content>
                        <Comment.Author>{name}</Comment.Author>
                        <Comment.Metadata>
                            <div>1 day ago</div>
                        </Comment.Metadata>
                        <Comment.Text>
                            <p>
                                {comment}
                            </p>
                        </Comment.Text>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </>
    )
}