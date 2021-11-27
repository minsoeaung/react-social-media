import axios from "axios";
import {baseUrl} from "../shared/baseUrl";
import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "../context/ActionTypes";

const loginUser = (userCredentials, dispatch) => {
    dispatch({type: LOGIN_START})

    axios.post(`${baseUrl}auth/login`, userCredentials)
        .then(res => dispatch({type: LOGIN_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: LOGIN_FAILURE, payload: err}))
}

export default loginUser