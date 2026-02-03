package frontend_backend_integration.demo.model.mapper;

import frontend_backend_integration.demo.dto.TaskDTO;
import frontend_backend_integration.demo.entity.Task;

public class TaskMapper {

    public static TaskDTO toDTO(Task task) {
        TaskDTO dto = new TaskDTO();
        dto.setId(task.getId());
        dto.setTitle(task.getTitle());
        dto.setDescription(task.getDescription());
        dto.setStatus(task.getStatus());
        dto.setPriority(task.getPriority());
        dto.setCompleted(task.isCompleted());
        return dto;
    }
}