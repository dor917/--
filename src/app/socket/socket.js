import { message } from "antd";
import io from "socket.io-client";

export let socket = io("http://localhost:3309", { transports: ["websocket"] });

export const initSocketConnection = () => {
    if (socket) return;
    socket.connect();
};

// 이벤트 명을 지정하고 데이터를 보냄
export const sendSocketMessage = (message) => {
    if (socket == null || socket.connected === false) {
        initiateSocketConnection();
    }
    socket.emit("message", message);
};

// // 해당 이벤트를 받고 콜백 함수를 실행함
// export const socketInfoReceived = () => {
//     socket.on('message', (msg) => {
//         console.log(msg);
//     });
// };

// 소켓 연결을 끊음
export const disconnectSocket = () => {
    if (socket == null || socket.connected === false) {
        return;
    }
    socket.disconnect();
    socket = undefined;
};