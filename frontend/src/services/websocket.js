let socket = null;

export const connectWebSocket = (url, onMessage) => {
  if (socket) return; // prevent multiple connections

  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("WebSocket connected");
  };

  socket.onmessage = (event) => {
    if (onMessage) {
      onMessage(JSON.parse(event.data));
    }
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");
    socket = null;
  };
};

export const disconnectWebSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};