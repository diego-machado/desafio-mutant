import { getRepository, Repository } from 'typeorm';

import ICompaniesRepository from '@modules/users/repositories/ICompaniesRepository';

import Company from '@modules/users/infra/typeorm/entities/Company';
import ICreateCompanyDTO from '@modules/users/dtos/ICreateCompanyDTO';

class CompaniesRepository implements ICompaniesRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }

  public async create({
    name,
    catchPhrase,
    bs,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = this.ormRepository.create({
      name,
      catchPhrase,
      bs,
    });

    await this.ormRepository.save(company);

    return company;
  }

  public async findCompanyByName(name: string): Promise<Company | undefined> {
    const company = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return company;
  }

  public async save(company: Company): Promise<Company> {
    return this.ormRepository.save(company);
  }
}

export default CompaniesRepository;
