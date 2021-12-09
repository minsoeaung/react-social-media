import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const createConversation = async (senderId, receiverId) => {
    try {
        await axios.post(`${baseUrl}conversations`, {
            senderId: senderId,
            receiverId: receiverId
        })
    } catch (e) {
        console.log(e)
    }
}

export default createConversation