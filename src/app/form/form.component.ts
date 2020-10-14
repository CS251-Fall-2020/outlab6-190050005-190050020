import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormFace, FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private formService: FormService) {
  }

  myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl(''),
    comment: new FormControl(''),
  });

  showData() {
    this.formService.getData()
      .subscribe((data: FormFace) => {
        this.myForm.patchValue({
          name: data.name,
          email: data.email,
          feedback: data.feedback,
          comment: data.comment
        });
      });
  }

  ngOnInit() {
    this.showData();
  }

  onSubmit() {
    alert("Submitting!");
  }
}
