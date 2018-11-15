import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import { SelectorState} from "../reducers/state.reducer";


@Injectable()
export class StateEffects {

    constructor(private actions$: Actions,
                private store: Store<SelectorState>){
    }
}
