import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _inscriUserUrl = "http://localhost:3000/user/inscription";
  private _connexionUserUrl = "http://localhost:3000/user/connexion";

  constructor(private http : HttpClient) { }

  inscriUser(user){
    let dataFromWS = this.http.post<any>(this._inscriUserUrl,user);
    
    return dataFromWS;
  }

  connexionUser(user){
    let dataFromWS = this.http.post<any>(this._connexionUserUrl,user);
    
    return dataFromWS;
  }

}
