package gr.aueb.cf.schoolapp.dao;

import gr.aueb.cf.schoolapp.model.Teacher;

public class TeacherDAOImpl extends AbstractDAO<Teacher> implements ITeacherDAO {
    public TeacherDAOImpl() {
        this.setPersistenceClass(Teacher.class);
    }
}
