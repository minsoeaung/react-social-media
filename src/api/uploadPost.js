import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const uploadPost = async (postData) => {
    await axios.post(`${baseUrl}posts`, postData)
}

export default uploadPost