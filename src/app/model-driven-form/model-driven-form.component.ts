import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  regForm: FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.regForm = this.builder.group({
      'fullName' :new FormControl('', Validators.required),
      'dateofBirth' :new FormControl('', Validators.required),
      'gender' :new FormControl(),
      'bloodGroup' :new FormControl(),
      'weight' :new FormControl(),
      'city' :new FormControl(),
      'contactNumbers' :new FormGroup({
      'mobileNumber' :new FormControl(),
      'landLine' :new FormControl()
    }),
    });
  }
  submit(){
    console.log(this.regForm.value);
  }

}
