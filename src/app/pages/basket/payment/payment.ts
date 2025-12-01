import {Component, inject} from '@angular/core';
import {ProductsService} from '../../../services/products-service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from '../../../services/contact-service';
import {Button} from '../../../components/button/button';
import {onErrorResumeNextWith} from 'rxjs';
import {Modal} from '../../../components/modal/modal';

@Component({
  selector: 'app-payment',
  imports: [
    Button,
    ReactiveFormsModule,
    Modal
  ],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  payDisabled : boolean = true;
  checkboxDisabled: boolean = true;

  productService = inject(ProductsService);

  paymentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), ContactService.spaceValidator]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), ContactService.spaceValidator]),
    cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/), Validators.nullValidator,]),
    expireMonth: new FormControl('01', [Validators.required]),
    expireYear: new FormControl('2025', [Validators.required, Validators.pattern('$$/^\\\\d+$/$$')]),
    cvv: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}$/),]),
    email: new FormControl('', [Validators.required, Validators.email, /*ContactService.spaceValidator*/]),
    adress: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    apartment: new FormControl('', [Validators.required]),
    postacode: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  })

  submitForm() {
    console.log('FORM VALUE:', this.paymentForm.value);
    console.log('FORM STATUS:', this.paymentForm.status);

    if (this.paymentForm.invalid) {
      console.log("form validation failed");
      console.log(this.paymentForm);
      return;
    }

    this.applicaton(
      this.paymentForm.value.name ?? '',
      this.paymentForm.value.surname ?? '',
      this.paymentForm.value.cardNumber ?? '',
      this.paymentForm.value.expireMonth ?? '',
      this.paymentForm.value.expireYear ?? '',
      this.paymentForm.value.cvv ?? '',
      this.paymentForm.value.email ?? '',
      this.paymentForm.value.adress ?? '',
      this.paymentForm.value.city ?? '',
      this.paymentForm.value.country ?? '',
      this.paymentForm.value.apartment ?? '',
      this.paymentForm.value.phone ?? '',

    )


    this.paymentForm.reset();

  console.log("Form başarılı şekilde gönderildi");
  }

  applicaton(name: string, surname: string, cardNumber: string,
             expireMonth: string, expireYear: string,
             cvv: string, email: string,
             adress: string,  city: string,
             country: string, apartment: string,
             phone: string) {
    console.log("Name :", name, " surname :", surname, " cardnumber :", cardNumber,
      " expireMonth: ", expireMonth, " expireYear :", expireYear,
      " cvv :", cvv, " adress ", adress);


    let payerInfo = {
      name: name,
      surname: surname,
      cardNumber: cardNumber,
      expireMonth: expireMonth,
      expireYear: expireYear,
      cvv: cvv,
      email: email,
      adress: adress,
      city: city,
      country: country,
      apartment: apartment,
      phone: phone
    }
  }

  conditionsAccepted: boolean = false;


  acceptCondition(){
    this.conditionsAccepted = true;
    console.log("oldu");
  }

}
