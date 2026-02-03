package frontend_backend_integration.demo.controller;

import frontend_backend_integration.demo.dto.TaskDTO;
import frontend_backend_integration.demo.entity.Task;
import frontend_backend_integration.demo.entity.User;
import frontend_backend_integration.demo.repository.UserRepository;
import frontend_backend_integration.demo.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@CrossOrigin
public class TaskController {

    private final TaskService taskService;
    private final UserRepository userRepository;

    @GetMapping
    public List<TaskDTO> getTasks(@AuthenticationPrincipal UserDetails user) {
        User u = userRepository.findByEmail(user.getUsername()).orElseThrow();
        return taskService.getTasks(u);
    }

    @PostMapping
    public TaskDTO createTask(@RequestBody Task task,
                              @AuthenticationPrincipal UserDetails user) {
        User u = userRepository.findByEmail(user.getUsername()).orElseThrow();
        return taskService.createTask(task, u);
    }

    @PutMapping("/{id}")
    public TaskDTO updateTask(@PathVariable Long id,
                              @RequestBody Task task,
                              @AuthenticationPrincipal UserDetails user) {
        User u = userRepository.findByEmail(user.getUsername()).orElseThrow();
        return taskService.updateTask(id, task, u);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id,
                           @AuthenticationPrincipal UserDetails user) {
        User u = userRepository.findByEmail(user.getUsername()).orElseThrow();
        taskService.deleteTask(id, u);
    }
}