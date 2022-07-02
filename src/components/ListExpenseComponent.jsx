import React, { Component } from 'react';
import ExpenseServices from '../services/ExpenseServices'
import { withRouter } from '../components/withRouter';

class ListExpenseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
        }
        this.addExpense = this.addExpense.bind(this);
        this.updateExpense =this.updateExpense.bind(this);
    }

    addExpense() {
        this.props.navigate('/add-expense/_add')
    }

    updateExpense(id) {
        this.props.navigate(`/add-expense/${id}`);
    }

    componentDidMount() {
        ExpenseServices.getExpenses().then((res) => {
            this.setState({expenses: res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List of Expenses</h2>
                <div className="row">
                    <button className="btn-btn-primary" onClick={this.addExpense}>Add Expense</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Expense Category</th>
                                <th>Expense Description</th>
                                <th>Date of Expense</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.expenses.map(
                                    expense =>
                                    <tr key={expense.id}>
                                        <td>{expense.category}</td>
                                        <td>{expense.description}</td>
                                        <td>{expense.expensedate}</td>
                                        <td>{expense.amount}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => this.updateExpense(expense.id)}>Update</button>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListExpenseComponent);