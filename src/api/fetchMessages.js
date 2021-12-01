import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const fetchMessages = async (currentChatId) => {
    try {
        const res = await axios.get(`${baseUrl}messages/${currentChatId}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default fetchMessages