import moment from "moment";
import selectExpensesTotal from '../../selectors/expenses-total.js';

const expenses = [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment().subtract(4, 'days').valueOf()
}, {
    id: 3,
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment().add(4, 'days').valueOf()
}];

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a single epense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toEqual(114195);
});