import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
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
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    feedback: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
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
    var json = JSON.stringify(this.myForm.getRawValue());
    this.formService.sendData(json).subscribe(response => console.log(response));
  }
}
