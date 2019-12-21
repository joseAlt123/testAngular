import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAppComponent } from './lista-app/lista-app.component';

const routes: Routes = [
  { path: 'listar-datos', component: ListaAppComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
