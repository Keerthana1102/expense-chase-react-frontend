import axios from 'axios';

const EXPENSE_API_BASE_URL = "http://localhost:8080/api/v1/expenses";

class ExpenseService {

    getExpenses(){
        return axios.get(EXPENSE_API_BASE_URL);
    }

    addExpense(expense) {
        return axios.post(EXPENSE_API_BASE_URL, expense);
    }

    getExpenseById(expenseId) {
        return axios.get(EXPENSE_API_BASE_URL + '/' + expenseId);
    }

    updateExpense(expense, expenseId) {
        return axios.put(EXPENSE_API_BASE_URL + '/' + expenseId, expense);
    }
}

export default new ExpenseService()