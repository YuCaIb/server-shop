import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  submitApplication(name: string, email: string, msg: string) {
    console.log('Contact info ', name, email, msg);

    let contactInfo = {
      name: name,
      email: email,
      msg: msg
    }
  };

  /* Validators */

  static spaceValidator(control: AbstractControl): ValidationErrors | null {
    /* Sadece space basılarak doldurulan inputları valide etmek için kullanılan fonksiyon.
     checks if only white spaces.*/
    if (control.value && control.value.length) {
      let isOnlyWhiteSpace = (control.value || '').trim().length === 0;
      let isValid = !isOnlyWhiteSpace;
      return isValid ? null : {'onlywhitespace': true};
    }
    return null;
  };

}
