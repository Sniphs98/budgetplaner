package pictorius.ITB119.budgetplaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pictorius.ITB119.budgetplaner.modull.User;
import pictorius.ITB119.budgetplaner.services.UserServices;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserServices userServices;

    @PostMapping("/create")
    public void createUser(@RequestBody User user){
        userServices.createUser(user);
    }

    @GetMapping("/getAll")
    public List<User> getListOfUsers(){
        return userServices.getListOfUser();
    }

    @PostMapping("/updateUser")
    public void updateUser(@PathVariable User user){
        userServices.updateUser(user);
    }

    @GetMapping("/getById/{id}")
    public User getByUerID(@PathVariable int id){
        return userServices.getByUserId(id);
    }

    @PostMapping("/login")
    public User UserLogin(@RequestBody User user){
        return userServices.loginUser(user);
    }
}
