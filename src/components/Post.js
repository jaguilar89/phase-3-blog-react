import React from "react";
import CommentContainer from "./CommentContainer";

export default function Post() {
    return (
        <>
            <div className="post">
                <h1>This is a post</h1>
            </div>
            <CommentContainer />
        </>
    )
}