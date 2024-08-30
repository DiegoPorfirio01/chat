import { env } from "@chat/env";
import { io, Socket } from "socket.io-client";
let socket: Socket;
export const getSocket = () => {
  if (!socket) {
    socket = io(env.NEXT_PUBLIC_API_URL, { autoConnect: false });
  }
  return socket;
};
