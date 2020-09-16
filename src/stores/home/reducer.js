import * as actions from './actions';
const reducer = (state, action) =>
    ({
        [actions.SET_RESTAURANT_MODAL_IS_OPEN]: { ...state, restaurantModalIsOpen: action.payload },
        [actions.SET_VOTING_IS_AVAILABLE]: { ...state, votingIsAvailable: action.payload }
    }[action.type]);

export default reducer;
