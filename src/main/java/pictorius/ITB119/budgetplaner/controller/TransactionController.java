package pictorius.ITB119.budgetplaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pictorius.ITB119.budgetplaner.modull.Transaction;
import pictorius.ITB119.budgetplaner.services.TransactionServices;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    TransactionServices transactionServices;

    @PostMapping("/create")
    public void addTransaction(@RequestBody Transaction transaction){
        transactionServices.createTransaction(transaction);
    }

}
