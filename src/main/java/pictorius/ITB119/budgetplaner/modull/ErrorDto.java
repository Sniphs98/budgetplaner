package pictorius.ITB119.budgetplaner.modull;

import lombok.Data;

@Data
public class ErrorDto {

    private String timeStamp;
    public String status;
    private String errorMassage;

}
