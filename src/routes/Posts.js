import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getPosts } from "../services/posts"

function Posts() {
    const [posts, setPosts] = useState()


    useEffect(() => {
        try {
            const fetchPosts = async () => {
                const { data } = await getPosts()
                console.log(data)
                setPosts(data)
            }
            fetchPosts()
        } catch (error) {
            console.log(error.message)
        }
    }, [])

    if (!posts) return <p>Loading</p>

    console.log('posts', posts)

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(({ title, body, id }) => {
                return (
                    <>
                        <p>{id} - <Link to={`/posts/${id}`}>{title}</Link></p>
                        <p>{body}</p>
                    </>
                )
            })}
        </div>
    )
}

export default Posts
