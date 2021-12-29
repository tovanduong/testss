import * as ActionType from './ActionType'
export const Staff = (state = { staff: []}, action) => {
    switch (action.ActionType) {
        case ActionType.ADD_STAFFS:
            return {...state, staff: action.paload}
        
        case ActionType.STAFFS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
} 