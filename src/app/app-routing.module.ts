import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolcloreComponent } from './view/folclore/folclore.component';
import { HomepageComponent } from './view/homepage/homepage.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"musicas", component:FolcloreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
