package pictorius.ITB119.budgetplaner.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.repository.ProjectRepository;

@Service
public class ProjectServices {

    @Autowired
    ProjectRepository projectRepository;

    public void createProject(Project project) {
        projectRepository.save(project);
    }
}
