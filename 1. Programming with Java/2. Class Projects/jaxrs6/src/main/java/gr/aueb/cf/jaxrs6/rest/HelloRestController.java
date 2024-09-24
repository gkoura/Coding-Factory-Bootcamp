package gr.aueb.cf.jaxrs6.rest;

import gr.aueb.cf.jaxrs6.model.TeacherReadOnlyDTO;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/greetings")
public class HelloRestController {

    @GET
    @Path("/hello")
    @Produces(MediaType.TEXT_PLAIN)
    public String sayHello() {
        return "Hello from Coding Factory";
    }

    @GET
    @Path("/hello-json")
    @Produces(MediaType.APPLICATION_JSON)
    public Response sayHelloJSON() {
        TeacherReadOnlyDTO readOnlyDTO = TeacherReadOnlyDTO.builder()
                .id(1L)
                .firstname("Αθανάσιος")
                .lastname("Ανδρούτσος")
                .build();

        // return Response.ok(readOnlyDTO).build();
        return Response
                .status(Response.Status.OK)
                .entity(readOnlyDTO)
                .build();
    }

    @GET
    @Path("/teachers")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTeachers(@QueryParam("city") String city) {
        if (city == null || city.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }

        // assume that we call List<TeacherReadOnlyDTO> = teacherService.getTeachersByCity(city)
        List<TeacherReadOnlyDTO> teacherReadOnlyDTOS = List.of(
                new TeacherReadOnlyDTO(1L, "Alice", "W."),
                new TeacherReadOnlyDTO(2L, "Bob", "D"));

        return Response.status(Response.Status.OK).entity(teacherReadOnlyDTOS).build();
    }
}