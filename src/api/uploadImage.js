import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const uploadImage = async (formData) => {
    await axios.post(`${baseUrl}upload`, formData)
}

export default uploadImage