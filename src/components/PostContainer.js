import React from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function PostContainer() {
    return (
        <div id="post-container">
            <p>Post Container</p>
            {Array(10).fill(<div><Link>Link to blog post (with title, description, and date of post)</Link></div>)}
        </div>
    )
}