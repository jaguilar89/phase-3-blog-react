import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import PostComment from "./PostComment";
import { Header } from "semantic-ui-react";

export default function CommentContainer({ postID }) {
    //state for comments goes 
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:9292/comments/${postID}`)
            const commentList = await res.json()
            setComments(commentList)
        })()
    }, [])

    const commentsDisplay = comments.map((comment) => (
        <PostComment
            key={comment.id}
            name={comment.name}
            comment={comment.body}
            createdAt={comment.created_at}
        />
    ))

    return (
        <div className="comments">
            <Header as="h3" dividing>
                    Comments
            </Header>
            {commentsDisplay}
            <CommentForm postID={postID} comments={comments} setComments={setComments} />
        </div>
    )
}