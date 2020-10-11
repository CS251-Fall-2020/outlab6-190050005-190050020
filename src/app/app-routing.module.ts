import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'contactpage', component: ContactpageComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
