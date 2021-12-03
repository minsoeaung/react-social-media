import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const fetchOneConversation = async (firstUserId, secondUserId) => {
    try {
        const res = await axios.get(`${baseUrl}conversations/find/${firstUserId}/${secondUserId}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default fetchOneConversation