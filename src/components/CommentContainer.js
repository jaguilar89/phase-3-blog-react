import React from "react";
import CommentForm from "./CommentForm";
import PostComment from "./PostComment";

export default function CommentContainer() {
    //state for comments goes here
    return (
        <>
            <PostComment />
            <CommentForm />
        </>
    )
}