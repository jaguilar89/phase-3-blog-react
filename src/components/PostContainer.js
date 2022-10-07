import React from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default function PostContainer() {
    // state for posts goes here
    return (
        <div id="post-container">
            <Header size="huge">Post Container</Header>
            <Button content='Add new post' labelPosition='left' icon='pencil alternate icon' primary />
            {Array(10).fill(<div><Link to='/posts/1'>Link to blog post (with title, description, and date of post)</Link></div>)}
        </div>
    )
}