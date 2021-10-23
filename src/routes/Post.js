import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getPost } from "../services/posts"


function Post() {
    const [post, setPost] = useState()

    const { postId } = useParams()

    useEffect(() => {
        try {
            const fetchPost = async () => {
                const resp = await getPost(postId)
                console.log(resp)
                setPost(resp.data)
            }
            fetchPost()
        } catch (error) {
            console.log(error.message)
        }
    }, [postId])

    if (!post) return <p>LOADING</p>

    const { id, userId, title, body } = post
    return (
        <>
            <h3>User {userId}</h3>
            <h3>Post {id}: {title}</h3>
            <p>{body}</p>

            <button>Carregar comentários </button>
        </>
    )
}

export default Post