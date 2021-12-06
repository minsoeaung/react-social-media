import axios from "axios";
import {baseUrl} from "../shared/baseUrl";
import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "../context/ActionTypes";

const loginUser = async (userCredentials, dispatch) => {
    dispatch({type: LOGIN_START})

    try {
        const {data} = await axios.post(`${baseUrl}auth/login`, userCredentials)
        const {accessToken, refreshToken, ...other} = data

        /*
        *   do something with accessToken and refreshToken later
        * */

        // store in localStorage
        localStorage.setItem('userData', JSON.stringify(other))

        // store in context
        dispatch({type: LOGIN_SUCCESS, payload: data})
    } catch (e) {
        dispatch({type: LOGIN_FAILURE, payload: e})
    }
}

export default loginUser