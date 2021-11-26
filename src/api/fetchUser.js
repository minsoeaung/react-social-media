import axios from "axios";

const fetchUser = async (userId) => {
    const res = await axios.get(`users/${userId}`)
    return res.data
}

export default fetchUser