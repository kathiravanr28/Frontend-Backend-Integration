package frontend_backend_integration.demo.service;

import frontend_backend_integration.demo.model.entity.WebSocketMessage;
import frontend_backend_integration.demo.repository.WebSocketMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WebSocketService {

    private final WebSocketMessageRepository messageRepository;

    // Save a new message
    public WebSocketMessage saveMessage(String sender, String message) {
        WebSocketMessage msg = WebSocketMessage.builder()
                .sender(sender)
                .message(message)
                .timestamp(LocalDateTime.now())
                .build();
        return messageRepository.save(msg);
    }

    // Get all messages
    public List<WebSocketMessage> getAllMessages() {
        return messageRepository.findAll();
    }
}