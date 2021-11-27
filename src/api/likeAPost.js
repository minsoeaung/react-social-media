import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

const likeAPost = async (postId, userId) => {
    await axios.put(`${baseUrl}posts/${postId}/like`, {userId: userId})
}

export default likeAPost