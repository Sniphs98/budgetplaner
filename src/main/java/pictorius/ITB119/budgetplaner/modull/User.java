package pictorius.ITB119.budgetplaner.modull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@lombok.Data
@Entity
public class User {
    @Id
    @GeneratedValue
    int userId;
    String userName;
    String password;

    public User() {}

    public User(String username, String password) {
        this.userName = username;
        this.password = password;
    }
}