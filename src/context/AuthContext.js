import {createContext, useReducer} from "react";
import AuthReducer from "../context/AuthReducer";

/*
*   --- context ---
*
*   when react renders a component that subscribes to this context obj
*   it will read the current context value from the closest matching
*   "Provider" above it in the tree.
*
*   The "defaultValue" argument is only used when a component does not have
*   a matching "Provider" above it in the tree.
* */

/*
*   --- to consume the state ---
*
*   1. wrap the parent component with <AuthContextProvider> so that every child of it
*      has access to the state that is held by it
*   2. in child component, the state is available through useContext
*
*   eg. const [-, set-] = useContext(AuthContext)
* */

/*
*   AuthContextProvider's job is to hold some information
*   and pass it down to all component we want
* */

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)


// wrapper, provider
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}