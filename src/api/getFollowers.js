import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const getFollowers = async (userId) => {
    try {
        const res = await axios.get(`${baseUrl}users/followers/${userId}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default getFollowers