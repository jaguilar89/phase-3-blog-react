import React from "react";
import CommentForm from "./CommentForm";
import PostComment from "./PostComment";

export default function CommentContainer() {
    return (
        <>
            <PostComment />
            <CommentForm />
        </>
    )
}