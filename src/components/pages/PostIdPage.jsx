import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService, { getById } from '../../API/PostService'
import { useFetching } from '../../hooks/useFetching'
import Loader from '../UI/loader/Loader'

export default function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComment] = useState([])
    const [fetchingPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isCommentLoading, commentError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id)
        setComment(response.data)
    })

    useEffect(() => {
        fetchingPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            {isLoading
                ? <Loader />
                : <div>{post.title} {post.id}</div>
            }
            <h1>Comment for posts</h1>
            {
                isCommentLoading
                    ? <Loader />
                    : <div>{comments.map(com =>
                        <div key={com.id} style={{margiTop: '30px'}}>
                            <h5>
                                {com.email}
                            </h5>
                            <div>{com.body}</div>
                        </div>
                    )}</div>
            }
        </div>
    )
}
