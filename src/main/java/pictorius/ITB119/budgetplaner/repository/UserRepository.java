package pictorius.ITB119.budgetplaner.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pictorius.ITB119.budgetplaner.modull.User;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{

    List<User> findAll();
    User findByUserId(int userId);
    User findByFirstNameAndLastName(String firstName,String LastName);
}
