package pictorius.ITB119.budgetplaner.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pictorius.ITB119.budgetplaner.modull.Transaction;

import java.util.List;
import java.util.UUID;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Integer> {

    List<Transaction> findAll();
    Transaction getByTransactionId(int TransactionId);
}
