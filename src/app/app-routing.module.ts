import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'contact', component: ContactpageComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: '/contact', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
