package gr.aueb.cf.teacherapp.core.exceptions;

public class EntityNotAuthorised extends EntityGenericException{

    private static final String DEFAULT_CODE = "NotAuthorised";

    public EntityNotAuthorised(String code, String message) {
        super(code + DEFAULT_CODE, message);}
}
