package pictorius.ITB119.budgetplaner.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import pictorius.ITB119.budgetplaner.modull.Project;

import java.awt.print.Pageable;
import java.util.List;


@Repository
public interface ProjectRepository extends PagingAndSortingRepository<Project,Integer> {

    List<Project> findAll();
    Project getByProjectId(int projectId);
}
