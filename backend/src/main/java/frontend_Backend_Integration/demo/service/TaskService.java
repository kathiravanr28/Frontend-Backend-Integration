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

    public Task createTask(Task task, User user) {
        task.setUser(user); // assign task owner
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask, User user) {
        Task existingTask = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        if (!existingTask.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("You are not allowed to update this task");
        }

        existingTask.setTitle(updatedTask.getTitle());
        existingTask.setCompleted(updatedTask.isCompleted());
        return taskRepository.save(existingTask);
    }

    public void deleteTask(Long id, User user) {
        Task existingTask = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        if (!existingTask.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("You are not allowed to delete this task");
        }

        taskRepository.delete(existingTask);
    }

    public List<Task> getTasks(User user) {
        return taskRepository.findByUserId(user.getId());
    }
}