import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './passwords.validators';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private _us: UserService,
    private toastr: ToastrService,
    private router : Router) {

    this.inscriForm = fb.group(
      {
        nom: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        prenom: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        telephone: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(8),
          Validators.maxLength(13)

        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        motDePasse: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        reMotDePasse: new FormControl('', [
          Validators.required
        ]),
      },
      {
        validator: PasswordValidators.passwordsShouldMatch
      }
    )

  }


  get nom() { return this.inscriForm.get('nom') }
  get prenom() { return this.inscriForm.get('prenom') }
  get telephone() { return this.inscriForm.get('telephone') }
  get email() { return this.inscriForm.get('email') }
  get motDePasse() { return this.inscriForm.get('motDePasse') }
  get reMotDePasse() { return this.inscriForm.get('reMotDePasse') }

  ngOnInit() {
  }

  inscription() {
    //console.log(this.inscriForm.value);

    this._us.inscriUser(this.inscriForm.value).subscribe(
      (res) => {
        this.toastr.success('', res.message);
        setTimeout(()=>{
         this.router.navigate(['/']); 
        },2000)
      },
      (err) => {
        console.log(err);
        this.toastr.error('', err.error.message);
      });

  }

}
