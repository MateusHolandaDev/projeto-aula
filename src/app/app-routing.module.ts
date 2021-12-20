import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './componentes/cards/cards.component';
import {FormComponent} from './componentes/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: '/cards', pathMatch: 'full'},
  {path: 'cards', component: CardsComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
