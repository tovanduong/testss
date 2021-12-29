import * as ActionType from './ActionType'
export const Staff = (state = { staff: [], errMess:null}, action) => {
    console.log(action.type)
    switch (action.type) {

        case ActionType.ADD_STAFFS:
            return {...state, errMess:null, staff: action.payload}
        
        case ActionType.STAFFS_FAILED:
            return {...state, errMess: action.payload};
        default:
            return state;
    }
} 