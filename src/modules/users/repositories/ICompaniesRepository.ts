import Company from '@modules/users/infra/typeorm/entities/Company';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';

export default interface ICompaniesRepository {
  create(company: ICreateCompanyDTO): Promise<Company>;
  save(company: Company): Promise<Company>;
  findCompanyByName(name: string): Promise<Company | undefined>;
}
