import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public formData1: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  public formData2 = this.formBuilder.group({
    name: ['', Validators.required],
  });

  onSubmit(): void {
    this.common.submitData(this.formData2.value);
  }

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
}
