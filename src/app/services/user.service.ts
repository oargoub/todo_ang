import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _inscriUserUrl = "http://localhost:3000/user/inscription";
  
  constructor(private http : HttpClient) { }

  inscriUser(user){
    return this.http.post<any>(this._inscriUserUrl,user);
  }

}
