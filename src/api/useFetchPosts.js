import {useEffect, useState} from 'react'
import axios from 'axios'
import {baseUrl} from "../shared/baseUrl";

const useFetchPosts = (username, isProfile) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setLoading(true);
        setError(false);

        const url = isProfile
            ? `${baseUrl}posts/profile/${username}`
            : `${baseUrl}posts/timeline/${username}`
        axios.get(url)
            .then(res => {
                setPosts(res.data.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt)))
                setLoading(false)
            }).catch(e => {
            if (axios.isCancel(e)) return
            setLoading(false)
            setError(true)
        })
    }, [isProfile, username])

    return {isLoading, error, posts}
}

export default useFetchPosts