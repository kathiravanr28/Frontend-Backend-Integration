package frontend_backend_integration.demo.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 500)
    private String description;

    @Column(length = 50)
    private String status;

    @Column(length = 50)
    private String priority;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}