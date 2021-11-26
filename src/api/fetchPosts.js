import axios from "axios";

const fetchPosts = async (userId) => {
    const res = await axios.get(`posts/timeline/${userId}`)
    return res.data
}

export default fetchPosts