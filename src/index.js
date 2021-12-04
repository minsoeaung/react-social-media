import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext";
import {socket, SocketContext} from "./context/Socket";

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <SocketContext.Provider value={socket}>
                <App/>
            </SocketContext.Provider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);