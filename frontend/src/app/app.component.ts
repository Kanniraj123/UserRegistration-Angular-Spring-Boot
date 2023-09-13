import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   registrationForm: FormGroup; // Define the registrationForm property
title = 'user-registration-app';

  user = { address: {} };
    constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      // Define your form controls here
      // For example, if you have an 'address' group, you can define it here.
      address: this.fb.group({
        addressLine: [''], // Initial values or validators can be added here
        addressLine2: [''],
        city: [''],
        postalCode: ['']
      })
      // Add more form controls or groups as needed
    });

}
}
