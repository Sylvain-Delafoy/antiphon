import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';

import { StateEffects } from './state.effects';

describe('StateEffects', () => {
  let actions$: Observable<any>;
  let effects: StateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      providers: [
        StateEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.get(StateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
