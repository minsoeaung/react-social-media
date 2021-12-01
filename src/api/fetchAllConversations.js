import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const fetchAllConversations = async (userId) => {
    try {
        const res = await axios.get(`${baseUrl}conversations/${userId}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default fetchAllConversations