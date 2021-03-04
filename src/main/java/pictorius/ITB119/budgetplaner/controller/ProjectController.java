package pictorius.ITB119.budgetplaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.services.ProjectServices;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    ProjectServices projectServices;

    @PostMapping("/create")
    public void addProject(@RequestBody Project project){
        projectServices.createProject(project);
    }

    @GetMapping("/getAll")
    public List<Project> getListOfProjects(){
        return projectServices.getListOfProjects();
    }

    @PostMapping("/updateProject")
    public void updateProject(@RequestBody Project project){
        projectServices.updateProject(project);
    }

    @GetMapping("/getById/{id}")
    public Project getByProjectById(@PathVariable int id){
        return projectServices.getByProjectById(id);
    }

    @GetMapping("/getAllUnfinishedProjects")
    public List<Project> getListOfUnfinishedProjects(){
        return projectServices.getListOfUnfinishedProjects();
    }
}
