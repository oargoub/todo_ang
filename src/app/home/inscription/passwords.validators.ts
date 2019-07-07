import { AbstractControl } from '@angular/forms';

export class PasswordValidators{

    static passwordsShouldMatch(control : AbstractControl){
        
        let password = control.get('motDePasse');
        let repassword = control.get('reMotDePasse');

        if (password.value != repassword.value) {
            return {
                passwordsShouldMatch : true
            };
        }

        return false;
    }

}