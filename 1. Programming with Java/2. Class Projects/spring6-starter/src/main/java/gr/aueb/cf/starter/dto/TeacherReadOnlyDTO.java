package gr.aueb.cf.starter.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TeacherReadOnlyDTO {
    private Long id;
    private String firstname;
    private String lastname;
}
