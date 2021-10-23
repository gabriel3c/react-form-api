import client from "../provider/client";

export const sendPost = (data) => {
    return client.post('/posts', data)
}

export const getPosts = () => {
    return client.get('/posts')
}

export const getPost = (id) => {
    return client.get(`/posts/${id}`)
}