package pictorius.ITB119.budgetplaner.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.repository.ProjectRepository;

import java.util.ArrayList;
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

    public Project getByProjectById(int id) {
        return projectRepository.getByProjectId(id);
    }

    public List<Project> getListOfUnfinishedProjects(){
        List<Project> unfinishedProjects = new ArrayList<>();

        for (Project project:projectRepository.findAll()) {
            int res = project.getGoalMoney().compareTo(project.getCurrentMoney());
            if (res == 1){
                unfinishedProjects.add(project);
            }
        }
        return unfinishedProjects;
    }
}
