import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvaPageComponent } from './pages/prova-page/prova-page.component';

const routes: Routes = [
  { path: '?prova=true', component: ProvaPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
