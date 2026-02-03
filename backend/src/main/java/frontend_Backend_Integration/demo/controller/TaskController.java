package frontend_backend_integration.demo.controller;

import frontend_backend_integration.demo.model.entity.Task;
import frontend_backend_integration.demo.model.entity.User;
import frontend_backend_integration.demo.repository.UserRepository;
import frontend_backend_integration.demo.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;
    private final UserRepository userRepository;

    @GetMapping
    public List<Task> getTasks(@AuthenticationPrincipal UserDetails user) {
        User u = userRepository.findByEmail(user.getUsername()).orElseThrow();
        return taskService.getTasksByUser(u);
    }

    @PostMapping
    public Task create(@RequestBody Task task,
                       @AuthenticationPrincipal UserDetails user) {
        User u = userRepository.findByEmail(user.getUsername()).orElseThrow();
        task.setUser(u);
        return taskService.saveTask(task);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        return taskService.updateTask(id, task);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}