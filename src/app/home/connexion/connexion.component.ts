import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  conneForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.conneForm = fb.group(
      {
        email: new FormControl('', [
          Validators.required
        ]),
        motDePasse: new FormControl('', [
          Validators.required
        ]),
      }
    )
  }
  get email() { return this.conneForm.get('email') }
    get motDePasse() { return this.conneForm.get('motDePasse') }
  ngOnInit() {
  }

  connexion() {
    console.log(this.conneForm.value);
  }

}
