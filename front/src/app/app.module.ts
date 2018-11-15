import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './core/route/app-routing.module';
import { AppComponent } from './app.component';
import {FeatureModule} from './feature/feature.module';
import {reducer} from "./core/store/reducers/state.reducer";
import {environment} from "../environments/environment";
import {StateEffects} from "./core/store/effects/state.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FeatureModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({context: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([StateEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
