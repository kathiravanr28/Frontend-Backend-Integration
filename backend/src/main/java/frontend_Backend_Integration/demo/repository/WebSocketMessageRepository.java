
package frontend_Backend_Integration.demo.repository;

import frontend_Backend_Integration.demo.model.entity.WebSocketMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebSocketMessageRepository extends JpaRepository<WebSocketMessage, Long> {}