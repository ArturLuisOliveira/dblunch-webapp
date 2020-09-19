import * as actions from './actions';
const reducer = (state, action) =>
    ({
        [actions.SET_EMAIL_INPUT]: { ...state, email: action.payload },
        [actions.SET_PASSWORD_INPUT]: { ...state, password: action.payload }
    }[action.type]);

export default reducer;
