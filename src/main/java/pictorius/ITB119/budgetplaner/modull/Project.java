package pictorius.ITB119.budgetplaner.modull;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Data
@Entity
public class Project {
    @Id
    @GeneratedValue
    int projectId;
    BigDecimal currentMoney;
    BigDecimal goalMoney;
    User[] supporters;
    String tile;
    String description;

    public Project() {
    }

    public Project(BigDecimal currentMoney, BigDecimal goalMoney, User[] supporters, String tile, String description) {
        this.currentMoney = currentMoney;
        this.goalMoney = goalMoney;
        this.supporters = supporters;
        this.tile = tile;
        this.description = description;
    }
}
