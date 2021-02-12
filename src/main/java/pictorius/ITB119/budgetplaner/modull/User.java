package pictorius.ITB119.budgetplaner.modull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.crypto.Data;
import java.util.UUID;

@lombok.Data
@Entity
public class User {
    @Id
    @GeneratedValue
    @org.hibernate.annotations.Type(type="org.hibernate.type.UUIDCharType")
    int userId;
    String firstname;
    String lastname;

    public User() {}

    public User(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}