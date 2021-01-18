package pictorius.ITB119.budgetplaner.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pictorius.ITB119.budgetplaner.modull.Project;

import java.util.UUID;

@Repository
public interface ProjectRepository extends CrudRepository<Project, UUID> {


}
