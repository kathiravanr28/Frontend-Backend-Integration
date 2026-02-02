package frontend_backend_integration.demo.controller;

import frontend_backend_integration.demo.entity.WebSocketMessage;
import frontend_backend_integration.demo.service.WebSocketService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class WebSocketController {

    private final WebSocketService webSocketService;

    // Receive message from client
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public List<WebSocketMessage> sendMessage(WebSocketMessage message) {
        webSocketService.saveMessage(message.getSender(), message.getMessage());
        return webSocketService.getAllMessages();
    }
}