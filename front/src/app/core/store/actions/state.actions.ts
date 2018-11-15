import { Action } from '@ngrx/store';

export enum StateActionTypes {
  ActionResetContext = '[State] reset States',
  ActionSuccess = '[State] action success',
  LoadingOn = '[State] Loading ON',
  LoadingOff = '[State] Loading OFF',

}

export class ActionResetContext implements Action {
    readonly type = StateActionTypes.ActionResetContext;
    constructor (){
    }
}

export class ActionSuccess implements Action {
    readonly type = StateActionTypes.ActionSuccess;
    constructor (){
    }
}

export class ActionLoadingOn implements Action {
  readonly type = StateActionTypes.LoadingOn;
   constructor (){

   }
}
export class ActionLoadingOff implements Action {
  readonly type = StateActionTypes.LoadingOff;
   constructor (){

   }
}



export type StateActions =
    | ActionSuccess
    | ActionLoadingOff
    | ActionLoadingOn
    | ActionResetContext ;
