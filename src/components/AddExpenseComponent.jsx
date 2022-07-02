import React, { Component } from 'react';
import { withRouter } from '../components/withRouter';
import ExpenseServices from '../services/ExpenseServices'

class AddExpenseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            description: '',
            expensedate: '',
            amount: '',
        }
        this.changeCategory = this.changeCategory.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeExpenseDate = this.changeExpenseDate.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.saveExpense = this.saveExpense.bind(this);
        this.cancelExpense = this.cancelExpense.bind(this);
        this.expenseAdded = this.expenseAdded.bind(this);
    }

    changeCategory = (event) => {
        this.setState({category: event.target.value});
    }

    changeDescription = (event) => {
        this.setState({description: event.target.value});
    }

    changeExpenseDate = (event) => {
        this.setState({expensedate: event.target.value});
    }

    changeAmount = (event) => {
        this.setState({amount: event.target.value});
    }

    expenseAdded() {
        this.props.navigate('/expenses')
    }

    saveExpense = (e) => {
        e.preventDefault();
        let expense = {category: this.state.category, description: this.state.description, expensedate: this.state.expensedate, amount: this.state.amount};
        console.log('Expense => ' + JSON.stringify(expense));

        ExpenseServices.addExpense(expense).then(res => {
            this.props.navigate('/expenses')
        });

    }

    cancelExpense() {
        this.props.navigate('/expenses')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Expense</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <input placeholder="Category" name="category" className="form-control"
                                            value={this.state.category} onChange={this.changeCategory} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input placeholder="Description of the expense" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescription} />
                                    </div>
                                    <div className="form-group">
                                        <label>Expense Date</label>
                                        <input placeholder="Date of the expense" name="expensedate" className="form-control"
                                            value={this.state.expensedate} onChange={this.changeExpenseDate} />
                                    </div>
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input placeholder="Amount spent" name="amount" className="form-control"
                                            value={this.state.amount} onChange={this.changeAmount} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveExpense}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancelExpense} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddExpenseComponent);