import {Component, inject} from '@angular/core';
import {Button} from '../../components/button/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact-service';

@Component({
  selector: 'app-contact',
  imports: [
    Button,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
    contactService = inject(ContactService);

    applyForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60), ContactService.spaceValidator]),
      email: new FormControl('', [Validators.required, Validators.email, ContactService.spaceValidator]),
      msg: new FormControl('', [Validators.required, Validators.minLength(120), Validators.maxLength(550), ContactService.spaceValidator]),
    });

    submitApplication() {
      if(this.applyForm.invalid) {
        console.log('Form validation failed');
        return
      }

      this.contactService.submitApplication(
        this.applyForm.value.name ?? '',
        this.applyForm.value.email ?? '',
        this.applyForm.value.msg ?? '',
      )

      this.applyForm.reset();
    };

}

