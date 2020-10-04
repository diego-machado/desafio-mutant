import Address from '@modules/users/infra/typeorm/entities/Address';
import ICreateAddressDTO from '../dtos/ICreateAddressDTO';

export default interface IAddressesRepository {
  create(address: ICreateAddressDTO): Promise<Address>;
  save(address: Address): Promise<Address>;
}
