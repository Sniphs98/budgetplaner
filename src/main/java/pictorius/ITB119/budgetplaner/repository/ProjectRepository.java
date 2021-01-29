package pictorius.ITB119.budgetplaner.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pictorius.ITB119.budgetplaner.modull.Project;

import java.util.List;


@Repository
public interface ProjectRepository extends CrudRepository<Project, Integer> {

    List<Project> findAll();
    Project getByProjectId(int projectId);
}
