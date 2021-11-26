import {useEffect, useState} from 'react'
import axios from 'axios'

const useFetchPosts = (username, isProfile) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setLoading(true);
        setError(false);

        const url = isProfile
            ? `posts/profile/${username}`
            : `posts/timeline/${username}`
        axios.get(url)
            .then(res => {
                setPosts(res.data)
                setLoading(false)
            }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
    }, [isProfile, username])

    return {isLoading, error, posts}
}

export default useFetchPosts