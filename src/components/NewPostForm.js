import React from "react";
import { TextArea } from "semantic-ui-react";

export default function NewPostForm() {
    return (
        <>
            <form class="ui form">
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="title" placeholder="Title" />
                </div>
            </form>
            <div class="ui form">
                <div class="field">
                    <label>Body</label>
                    <textarea style="height: 286px;"></textarea>
                </div>
            </div>
        </>

    )
}