package frontend_backend_integration.demo.service;

import frontend_backend_integration.demo.dto.TaskDTO;
import frontend_backend_integration.demo.entity.Task;
import frontend_backend_integration.demo.entity.User;
import frontend_backend_integration.demo.mapper.TaskMapper;
import frontend_backend_integration.demo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public List<TaskDTO> getTasks(User user) {
        return taskRepository.findByUser(user)
                .stream()
                .map(TaskMapper::toDTO)
                .collect(Collectors.toList());
    }

    public TaskDTO createTask(Task task, User user) {
        task.setUser(user);
        return TaskMapper.toDTO(taskRepository.save(task));
    }

    public TaskDTO updateTask(Long id, Task updatedTask, User user) {
        Task task = taskRepository.findById(id)
                .filter(t -> t.getUser().getId().equals(user.getId()))
                .orElseThrow(() -> new RuntimeException("Unauthorized"));

        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setStatus(updatedTask.getStatus());
        task.setPriority(updatedTask.getPriority());
        task.setCompleted(updatedTask.isCompleted());

        return TaskMapper.toDTO(taskRepository.save(task));
    }

    public void deleteTask(Long id, User user) {
        Task task = taskRepository.findById(id)
                .filter(t -> t.getUser().getId().equals(user.getId()))
                .orElseThrow(() -> new RuntimeException("Unauthorized"));

        taskRepository.delete(task);
    }
}