package pictorius.ITB119.budgetplaner.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;
import pictorius.ITB119.budgetplaner.modull.ErrorDto;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ErrorDto> generateException(ResponseStatusException re){
        ErrorDto dto = new ErrorDto();
        dto.setTimeStamp(new Date().toString());
        dto.setStatus(String.valueOf(re.getStatus().value()));
        dto.setErrorMassage(re.getMessage());

        return new ResponseEntity<ErrorDto>(dto, re.getStatus());
    }
}
