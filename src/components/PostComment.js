import React from "react";
import { Comment } from 'semantic-ui-react'

export default function PostComment({ name, comment }) {
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