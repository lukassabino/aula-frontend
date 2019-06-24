import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-exemplo',
  templateUrl: './form-exemplo.component.html',
  styleUrls: ['./form-exemplo.component.scss']
})
export class FormExemploComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.email]
    });
  }

  onSubmit() {
    console.log(this.formulario);
    console.log(this.formulario.get('nome').value);
    console.log(this.formulario.controls.email.value);
  }

}
