package pictorius.ITB119.budgetplaner.modull;

import lombok.Data;

import javax.persistence.Id;
import java.math.BigDecimal;

@Data
public class TransactionWithProject {
    @Id
    int transactionId;
    int userId;
    BigDecimal money;
    int projectId;
    Project project;

    public TransactionWithProject() {    }

    public TransactionWithProject(int userId, BigDecimal money, int projectId, Project project) {
        this.userId = userId;
        this.money = money;
        this.projectId = projectId;
        this.project = project;
    }
}


