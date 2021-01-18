package pictorius.ITB119.budgetplaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pictorius.ITB119.budgetplaner.modull.User;
import pictorius.ITB119.budgetplaner.services.UserServices;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserServices userServices;

    @PostMapping("/create")
    public void createUser(@RequestBody User user){
        userServices.createUser(user);
    }

}
