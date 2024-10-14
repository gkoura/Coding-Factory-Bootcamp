package gr.aueb.cf.starter.controller;


import gr.aueb.cf.starter.dto.TeacherInsertDTO;
import gr.aueb.cf.starter.dto.TeacherReadOnlyDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/hello")
public class HelloController {

    @GetMapping("/coding")
//    @RequestMapping(value = "/coding", method = RequestMethod.GET) older versions
    public String sayHello(Model model) {
        model.addAttribute("message", "Hello All!");
        return "index";
    }

    @GetMapping("/welcome")
    public String sayWelcome(@RequestParam(value = "name", defaultValue = "Guest") String name, Model model) {
        model.addAttribute("name", name);
        return "welcome";
    }


    @GetMapping("/insert")
    public String getTeacherForm(Model model) {
        model.addAttribute("teacherInsertDTO", new TeacherInsertDTO() );
        return "teachers/insert";
    }

    @PostMapping("/insert")
    public String addTeacher(@ModelAttribute("teacherInsertDTO") TeacherInsertDTO teacherInsertDTO, Model model) {
        TeacherReadOnlyDTO teacherReadOnlyDTO = new TeacherReadOnlyDTO(1L, "Gregory", "Gkoura");
        model.addAttribute("teacherReadOnlyDTO", teacherReadOnlyDTO);
        return "teachers/success";
    }
}
