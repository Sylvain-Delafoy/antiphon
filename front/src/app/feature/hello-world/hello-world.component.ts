import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {SelectorState} from '../../core/store/reducers/state.reducer';
import {ActionLoadingOff, ActionLoadingOn} from '../../core/store/actions/state.actions';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.sass']
})
export class HelloWorldComponent implements OnInit {
  title = 'antiphon-app';

  constructor(private store: Store<SelectorState>) { }

  ngOnInit() {
    this.store.dispatch(new ActionLoadingOn());
    this.store.dispatch(new ActionLoadingOff());
  }

}
