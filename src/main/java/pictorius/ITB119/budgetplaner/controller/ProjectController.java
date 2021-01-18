package pictorius.ITB119.budgetplaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.services.ProjectServices;




@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    ProjectServices projectServices;

    @PostMapping("/create")
    public void addProject(@RequestBody Project project){
        projectServices.createProject(project);
    }

}
