import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

/*
*   'user' param is 'username' or 'userId'
*   if fetchUser is used by Post, it it userId
*   if used by Profile, it is username
*   'isID' help that
* */
const fetchUser = async (user, isID) => {
    try {
        const res = isID
            ? await axios.get(`${baseUrl}users?userId=${user}`)
            : await axios.get(`${baseUrl}users?username=${user}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export default fetchUser