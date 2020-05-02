import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailBurgersComponent } from './detail-burgers/detail-burgers.component';
import { ListBurgersComponent } from './list-burgers/list-burgers.component';
const routes: Routes = [
  { path: '', component: ListBurgersComponent },
  { path: 'burger/:id', component: DetailBurgersComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
