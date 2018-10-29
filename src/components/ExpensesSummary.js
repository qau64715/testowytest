import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        <p>Expenses count: {props.expensesCount}</p>
        <p>Expenses total: {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
    </div>
);

const mapStateToProps = (state) => {
    const filteredExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesTotal: selectExpensesTotal(filteredExpenses),
        expensesCount: filteredExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);