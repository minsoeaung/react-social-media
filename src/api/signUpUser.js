import {baseUrl} from "../shared/baseUrl";
import axios from "axios";

const signUpUser = async (userData) => {
    try {
        return await axios.post(`${baseUrl}auth/register`, userData)
    } catch (err) {
        return err
    }
}

export default signUpUser