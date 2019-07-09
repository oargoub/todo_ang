import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  conneForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private _us:UserService,
    private toastr:ToastrService,
    private router:Router) {
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
    //console.log(this.conneForm.value);
    this._us.connexionUser(this.conneForm.value).subscribe(
      (res)=>{
        this.toastr.success('',res.message);
        localStorage.setItem('token',res.token);
        setTimeout(()=>{
          this.router.navigate(['/todo-list']);
        },1000);
      },
      (err)=>{
        this.toastr.error('',err.error.message);
      });
  }

}
