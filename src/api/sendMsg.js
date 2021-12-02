import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const sendMsg = async (message) => {
    try {
        const res = await axios.post(`${baseUrl}messages`, message)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default sendMsg