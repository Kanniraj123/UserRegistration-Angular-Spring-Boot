import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-address-component',
  templateUrl: './address.component.html',
})
export class AddressComponent {
  @Input() registrationForm: FormGroup | null = null;
}