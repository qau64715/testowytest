import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount="1" expensesTotal="3222" />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount="0" expensesTotal="0" />);
    expect(wrapper).toMatchSnapshot();
});