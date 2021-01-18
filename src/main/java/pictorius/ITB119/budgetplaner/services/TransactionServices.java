package pictorius.ITB119.budgetplaner.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pictorius.ITB119.budgetplaner.modull.Transaction;
import pictorius.ITB119.budgetplaner.repository.TransactionRepository;

@Service
public class TransactionServices {

    @Autowired
    TransactionRepository transactionRepository;

    public void createTransaction(Transaction transaction){
        transactionRepository.save(transaction);
    }
}
