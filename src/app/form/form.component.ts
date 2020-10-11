import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl(''),
    comments: new FormControl(''),
  });

  onSubmit() {
    alert("Submitting!");
  }
}
