import React from "react";
import { Comment } from 'semantic-ui-react'

export default function PostComment({ name, comment, createdAt }) {
    const date = new Date(createdAt).toLocaleString();

    return (
        <>
            <Comment.Group>
                <Comment>
                    <Comment.Content>
                        <Comment.Author>{name}</Comment.Author>
                        <Comment.Metadata>
                            <div>{date}</div>
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