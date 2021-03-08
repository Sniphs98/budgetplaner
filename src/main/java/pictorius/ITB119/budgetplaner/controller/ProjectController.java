package pictorius.ITB119.budgetplaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.modull.ProjectPage;
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
    public ResponseEntity<Page<Project>> getListOfProjects(ProjectPage projectPage){
        return new ResponseEntity<>(projectServices.getListOfProjects(projectPage), HttpStatus.OK);
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
    public ResponseEntity<Page<Project>> getListOfUnfinishedProjects(ProjectPage projectPage){
        return new ResponseEntity<>(projectServices.getListOfUnfinishedProjects(projectPage), HttpStatus.OK);
    }
}
