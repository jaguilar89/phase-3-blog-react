import React, { useState } from "react";
import { Container } from "semantic-ui-react";

export default function NewPostForm({ onSubmitPost }) {
    const form = {
        title: "",
        body: ""
    }

    const [formData, setFormData] = useState(form)

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:9292/posts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const newPost = await res.json();
            onSubmitPost(newPost)
        } catch (error) {
            console.log(error)
        }
        e.target.reset();
    };

    return (
        <>
            <Container>
                <form class="ui form" onSubmit={handleSubmit}>
                    <div class="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
                    </div>
                    <div class="ui form">
                        <div class="field">
                            <label>Body</label>
                            <textarea name='body' style={{ height: '300px' }} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <button class="ui submit button" type="submit">Submit</button>
                </form>
            </Container>
        </>
    )
}