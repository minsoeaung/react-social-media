import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

/*
*   userId => the user that we want to follow
*   currentUserId => the current user ( logged-in user )
* */
const unfollow = async (userId, currentUserId) => {
    try {
        await axios.put(`${baseUrl}users/${userId}/unfollow`, {userId: currentUserId})
        // console.log("unfollowed")
    } catch (e) {
        console.log(e)
    }
}

export default unfollow