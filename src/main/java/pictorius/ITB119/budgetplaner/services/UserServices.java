package pictorius.ITB119.budgetplaner.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pictorius.ITB119.budgetplaner.modull.User;
import pictorius.ITB119.budgetplaner.repository.UserRepository;

@Service
public class UserServices {

    @Autowired
    UserRepository userRepository;

    public void createUser(User user){
        userRepository.save(user);
    }

}
