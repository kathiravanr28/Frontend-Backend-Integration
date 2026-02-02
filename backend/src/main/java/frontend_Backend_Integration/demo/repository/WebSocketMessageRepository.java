package frontend_backend_integration.demo.repository;

import frontend_backend_integration.demo.model.entity.WebSocketMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebSocketMessageRepository extends JpaRepository<WebSocketMessage, Long> {}