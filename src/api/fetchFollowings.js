import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const fetchFollowings = async (userId) => {
    try {
        const res = await axios.get(`${baseUrl}users/followings/${userId}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default fetchFollowings