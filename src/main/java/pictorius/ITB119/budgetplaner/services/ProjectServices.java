package pictorius.ITB119.budgetplaner.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.repository.ProjectRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServices {

    @Autowired
    ProjectRepository projectRepository;

    public void createProject(Project project) {
        projectRepository.save(project);
    }

    public List<Project> getListOfProjects() {
        return projectRepository.findAll();
    }

    public void updateProject(Project project){
        projectRepository.save(project);
    }

    //TODO
    public Project getProjectById(int id) {
//        return projectRepository.getById(id);
        return null;
    }
}
