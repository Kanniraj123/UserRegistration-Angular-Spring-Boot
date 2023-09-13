import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from './user.model';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = {
    firstName: '',
    lastName: '',
    address: {
      addressLine: '',
      city: '',
      postalCode: ''
    }
  };

  constructor(
    private registrationService: RegistrationService,
    private translate: TranslateService
  ) {}

  registerUser() {
    this.registrationService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
      },
      (error) => {
        
        console.error('Registration failed:', error);
      }
    );
  }
}
