
export interface User {
  firstName: string;
  lastName: string;
  address: Address;
}

export interface Address {
  addressLine: string;
  city: string;
  postalCode: string;
}
