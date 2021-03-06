package pictorius.ITB119.budgetplaner.exception;

public class NotFoundException extends RuntimeException{

   public NotFoundException(String user_not_found) {
        super(user_not_found);
    }
}
