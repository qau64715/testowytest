import AuthReducer from '../../reducers/auth';

test('should set uid', () => {
    const action = {
        type: 'LOGIN',
        uid: 'someid'
    };
    const state = AuthReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should unset uid', () => {
    const action = {type: 'LOGOUT'};
    const state = AuthReducer({uid: 'someid'}, action);
    expect(state.uid).toBeFalsy();
});