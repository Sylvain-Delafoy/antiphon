import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloWorldComponent} from "../../feature/hello-world/hello-world.component";

const routes: Routes = [
  { path: '', component: HelloWorldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
