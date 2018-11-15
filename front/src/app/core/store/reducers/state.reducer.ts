import {StateActions, StateActionTypes} from "../actions/state.actions";
import {ContextModel} from "../../model/ContextModel";


export const selectorContext = (state): SelectorState => state;

export interface SelectorState {
    context: ContextModel;
}

export const initialState: ContextModel = new ContextModel();

export function reducer(state = initialState, action: StateActions): ContextModel {
    switch (action.type) {
        case StateActionTypes.ActionResetContext :
            return new ContextModel();
        case StateActionTypes.LoadingOn :
            return {
                ...state, loading: true
            };
        case StateActionTypes.LoadingOff :
            return {
                ...state, loading: false
            };
        default :
            return state;
    }
}
