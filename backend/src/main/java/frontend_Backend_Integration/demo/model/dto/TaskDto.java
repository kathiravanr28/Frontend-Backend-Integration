package frontend_backend_integration.demo.model.dto;

import lombok.Data;

@Data
public class TaskDTO {
    private Long id;
    private String title;
    private boolean completed;
}