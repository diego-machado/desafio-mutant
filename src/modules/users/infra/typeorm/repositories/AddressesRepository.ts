import { getRepository, Repository } from 'typeorm';

import IAddressesRepository from '@modules/users/repositories/IAddressesRepository';

import Address from '@modules/users/infra/typeorm/entities/Address';
import ICreateAddressDTO from '@modules/users/dtos/ICreateAddressDTO';

class AddressesRepository implements IAddressesRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create({
    street,
    suite,
    city,
    zipcode,
    lat,
    lng,
  }: ICreateAddressDTO): Promise<Address> {
    const address = this.ormRepository.create({
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
    });

    await this.ormRepository.save(address);

    return address;
  }

  public async save(address: Address): Promise<Address> {
    return this.ormRepository.save(address);
  }
}

export default AddressesRepository;
