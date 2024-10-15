package gr.aueb.cf.teacherapp.mapper;

import gr.aueb.cf.teacherapp.dto.TeacherInserDTO;
import gr.aueb.cf.teacherapp.dto.TeacherReadOnlyDTO;
import gr.aueb.cf.teacherapp.model.Teacher;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public Teacher mapToTeacherEntity(TeacherInserDTO teacherInserDTO) {
        Teacher teacher = new Teacher();
        teacher.setFirstname(teacherInserDTO.getFirstname());
        teacher.setLastname(teacherInserDTO.getLastname());
        teacher.setVat(teacherInserDTO.getVat());
        return teacher;
    }


    public TeacherReadOnlyDTO mapToTeacherReadOnlyDTO(Teacher teacher) {
        return new TeacherReadOnlyDTO(teacher.getId(), teacher.getCreatedAt(),
                teacher.getUpdatedAt(), teacher.getUuid(), teacher.getFirstname(),
                teacher.getLastname(), teacher.getVat(), teacher.getRegion().getName());

    }
}
