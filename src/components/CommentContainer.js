import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import PostComment from "./PostComment";

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
        />
    ))

    return (
        <>
            {commentsDisplay}
            <CommentForm />
        </>
    )
}