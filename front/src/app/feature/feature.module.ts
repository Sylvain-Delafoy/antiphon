import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelloWorldModule} from './hello-world/hello-world.module';

@NgModule({
  declarations: [],
  imports: [
    HelloWorldModule,
    CommonModule
  ]
})
export class FeatureModule { }
