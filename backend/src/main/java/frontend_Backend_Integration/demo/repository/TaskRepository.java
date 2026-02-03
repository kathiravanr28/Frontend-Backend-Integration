package frontend_backend_integration.demo.repository;

import frontend_backend_integration.demo.model.entity.Task;
import frontend_backend_integration.demo.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByUser(User user);
}