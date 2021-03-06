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
    String firstName;
    String lastName;
    String password;

    public User() {}

    public User(String firstName, String lastName, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}