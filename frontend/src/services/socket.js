import { Client } from "@stomp/stompjs";

let stompClient = null;

export const connectWebSocket = (onMessage) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.token) return;

  stompClient = new Client({
    brokerURL: "ws://localhost:8080/ws",
    connectHeaders: {
      Authorization: `Bearer ${user.token}`,
    },
    debug: (str) => console.log(str),
    reconnectDelay: 5000,
    onConnect: () => console.log("WebSocket connected"),
    onStompError: (frame) => console.error(frame),
  });

  stompClient.onConnect = () => {
    stompClient.subscribe("/topic/tasks", (msg) => {
      onMessage(JSON.parse(msg.body));
    });
  };

  stompClient.activate();
};

export const disconnectWebSocket = () => {
  if (stompClient) stompClient.deactivate();
};