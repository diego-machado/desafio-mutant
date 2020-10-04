import IAddressesRepository from '@modules/users/repositories/IAddressesRepository';

import ICreateAddressDTO from '@modules/users/dtos/ICreateAddressDTO';

import Address from '@modules/users/infra/typeorm/entities/Address';

class FakeAddressesRepository implements IAddressesRepository {
  private addresses: Address[] = [];

  public async create({
    street,
    suite,
    city,
    zipcode,
    lat,
    lng,
  }: ICreateAddressDTO): Promise<Address> {
    const address = new Address();

    Object.assign(address, {
      id: Math.floor(Math.random() * 100 + 1),
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
    });

    this.addresses.push(address);

    return address;
  }

  public async save(address: Address): Promise<Address> {
    const findIndex = this.addresses.findIndex(
      findaddress => findaddress.id === address.id,
    );

    this.addresses[findIndex] = address;

    return address;
  }
}

export default FakeAddressesRepository;
