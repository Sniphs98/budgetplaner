package pictorius.ITB119.budgetplaner.modull;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Transaction {
    @Id
    @GeneratedValue
    int transactionId;
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
