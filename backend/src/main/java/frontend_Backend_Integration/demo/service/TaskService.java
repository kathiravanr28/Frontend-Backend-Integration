package frontend_backend_integration.demo.service;

import frontend_backend_integration.demo.model.entity.Task;
import frontend_backend_integration.demo.model.entity.User;
import frontend_backend_integration.demo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    // Get all tasks (optional)
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get tasks by user ID
    public List<Task> getTasksByUser(User user) {
        return taskRepository.findByUserId(user.getId());
    }

    // Save new task
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }
}