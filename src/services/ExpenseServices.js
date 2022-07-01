import axios from 'axios';

const EXPENSE_API_BASE_URL = "http://localhost:8080/api/v1/expenses";

class ExpenseService {

    getExpenses(){
        return axios.get(EXPENSE_API_BASE_URL);
    }
}

export default new ExpenseService()