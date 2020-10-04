interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface ServerResponse {
  data: User;
}

export default interface IUserProvider {
  getAll(): Promise<User[]>;
}
