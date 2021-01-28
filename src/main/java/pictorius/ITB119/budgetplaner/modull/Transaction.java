package pictorius.ITB119.budgetplaner.modull;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.UUID;

@Data
@Entity
public class Transaction {
    @Id
    @GeneratedValue
    int transaction;
    int userId;
    BigDecimal money;
    int projectId;

    public Transaction() {
    }

    public Transaction(int userId, BigDecimal money, int projectId) {
        this.userId = userId;
        this.money = money;
        this.projectId = projectId;
    }
}
