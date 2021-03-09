package pictorius.ITB119.budgetplaner.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pictorius.ITB119.budgetplaner.modull.Project;
import pictorius.ITB119.budgetplaner.modull.Transaction;
import pictorius.ITB119.budgetplaner.modull.TransactionWithProject;
import pictorius.ITB119.budgetplaner.repository.ProjectRepository;
import pictorius.ITB119.budgetplaner.repository.TransactionRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionServices {

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    ProjectRepository projectRepository;

    public void createTransaction(Transaction transaction){
        transactionRepository.save(transaction);
    }

    public List<TransactionWithProject> getListOfTransactions() {


        List<TransactionWithProject> transactionWithProjectList = new ArrayList<>();
        for (Transaction transaction:transactionRepository.findAll()){
            transactionWithProjectList.add(new TransactionWithProject(transaction.getUserId(),transaction.getMoney(),
                    transaction.getProjectId(), projectRepository.getByProjectId(transaction.getProjectId())));
        }

        return transactionWithProjectList;
    }

    public void updateTransaction(Transaction transaction) {
        transactionRepository.save(transaction);
    }

    public Transaction getByTransactionId(int id) {
        return transactionRepository.getByTransactionId(id);
    }
}
