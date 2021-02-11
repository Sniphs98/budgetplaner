package pictorius.ITB119.budgetplaner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pictorius.ITB119.budgetplaner.modull.Transaction;
import pictorius.ITB119.budgetplaner.services.TransactionServices;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    TransactionServices transactionServices;

    @PostMapping("/create")
    public void addTransaction(@RequestBody Transaction transaction){
        transactionServices.createTransaction(transaction);
    }

    @GetMapping("/getAll")
    public List<Transaction> getListOfTransactions(){
        return transactionServices.getListOfTransactions();
    }

    @PostMapping("/updateTransaction")
    public void updateTransaction(@RequestBody Transaction transaction){
        transactionServices.updateTransaction(transaction);
    }

    @GetMapping("/getById/{id}")
    public Transaction getByTransactionId(@PathVariable int id){
        return transactionServices.getByTransactionId(id);
    }

}
