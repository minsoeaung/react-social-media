import io from 'socket.io-client'
import {socketUrl} from "../shared/socketUrl";
import {createContext} from "react";

export const socket = io.connect(socketUrl)
export const SocketContext = createContext();