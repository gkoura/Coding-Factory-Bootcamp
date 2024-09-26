package gr.aueb.cf.schoolapp.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class TeacherReadOnlyDTO {
    private Long id;
    private String firstName;
    private String lastName;
}
