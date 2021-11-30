import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

/*
*   userId => the user that we want to follow
*   currentUserId => the current user ( logged-in user )
* */
const follow = async (userId, currentUserId) => {
    try {
        await axios.put(`${baseUrl}users/${userId}/follow`, {userId: currentUserId})
        // console.log("followed")
    } catch (e) {
        console.log(e)
    }
}

export default follow