package pictorius.ITB119.budgetplaner.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.modull.ProjectPage;
import pictorius.ITB119.budgetplaner.repository.ProjectRepository;


import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectServices {

    @Autowired
    ProjectRepository projectRepository;

    public void createProject(Project project) {
        projectRepository.save(project);
    }

    public Page<Project> getListOfProjects(ProjectPage projectPage) {
        Sort sort = Sort.by(projectPage.getSortDirection(),projectPage.getSortBy());
        Pageable pageable = PageRequest.of(projectPage.getPageNumber(),projectPage.getPageSize(),sort);
        return projectRepository.findAll(pageable);
    }

    public void updateProject(Project project){
        projectRepository.save(project);
    }

    public Project getByProjectById(int id) {
        return projectRepository.getByProjectId(id);
    }

    public Page<Project> getListOfUnfinishedProjects(ProjectPage projectPage){
        List<Project> unfinishedProjects = new ArrayList<>();
        Sort sort = Sort.by(projectPage.getSortDirection(),projectPage.getSortBy());
        Pageable pageable = PageRequest.of(projectPage.getPageNumber(),projectPage.getPageSize(),sort);

        for (Project project:projectRepository.findAll(pageable)) {
            int res = project.getGoalMoney().compareTo(project.getCurrentMoney());
            if (res == 1){
                unfinishedProjects.add(project);
            }
        }

        return new PageImpl<Project>(unfinishedProjects, PageRequest.of(projectPage.getPageNumber(),
                projectPage.getPageSize(), sort), unfinishedProjects.size());
    }
}
