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
    UUID transaction;
    UUID user;
    BigDecimal money;
    UUID project;

    public Transaction() {
    }

    public Transaction(UUID user, BigDecimal money, UUID project) {
        this.user = user;
        this.money = money;
        this.project = project;
    }
}
